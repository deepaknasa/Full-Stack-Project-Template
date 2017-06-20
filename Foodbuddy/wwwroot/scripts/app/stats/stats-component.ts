import {
    Component,
    Inject,
    EventEmitter,
    Output,
    HostListener,
    ElementRef,
    ViewChild,
    Renderer,
    trigger,
    state,
    transition,
    animate,
    keyframes,
    style,
    OnInit
} from '@angular/core';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { FoodStat } from '../models/index';
import { StatsService } from './stats-service';

@Component({
    selector: 'statistics',
    templateUrl: './templates/stats/stats-template.html',
    styleUrls: ['styles/app/stats/stats-style.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ })),
            transition('void => *', [
                animate(200, keyframes([
                    style({ opacity: 0, offset: 0 }),
                    style({ opacity: 1, offset: 1 })
                ]))
            ]),
            transition('* => void', [
                animate(200, keyframes([
                    style({ opacity: 1, offset: 0 }),
                    style({ opacity: 0, offset: 1 })
                ]))
            ])
        ])
    ]
})
export class StatisticsComponent implements OnInit {
    @ViewChild('stockLeft') leftStock: ElementRef;

    FoodStatList: FoodStat[];
    next: number = 0;
    FoodStatListLag: any[] = [];

    constructor(private _sanitizer: DomSanitizer, private statsService: StatsService) {
        this.statsService.statsUpdated.subscribe((stats: FoodStat[]) => {
            this.FoodStatList = stats;
            this.resetItems();
        });
    }

    ngOnInit() {
        //this.FoodStatList = this.statsService.getAllStats();
        //this.resetItems();
    }

    resetItems(): void {
        this.next = 0;
        this.FoodStatListLag = [];
        this.sortItems();
        this.doNext();
    }

    sortItems() {
        if (!!this.FoodStatList && this.FoodStatList.length > 1) {
            this.FoodStatList = this.FoodStatList.sort((a, b) =>
                a.supplyLeft < b.supplyLeft ? -1 : a.supplyLeft > b.supplyLeft ? 1 : 0);
        }
    }

    doNext() {
        if (!!this.FoodStatList && (this.next < this.FoodStatList.length)) {
            this.FoodStatListLag.push(this.FoodStatList[this.next++]);
        }
    }

    removeMe(i: number) {
        this.FoodStatListLag.splice(i, 1);
    }

    getBackground(stock: number) {
        let color: string = this.getColor(stock);
        let result = {
            'background-color': color
        };

        return result;
    }

    getColor(stock: number): string {
        if (stock < 41) {
            //red zone.
            let percent: number = 1 - (0.01 * (stock * 2.5));
            return `rgba(255, 0, 0, ${percent})`;
        } else if (stock < 61) {
            //Amber zone. yellow
            let percent: number = (0.01 * ((stock - 40) * 5));
            return `rgba(255, 242, 153, ${percent})`;
        }
        else {
            //green zone.
            let percent: number = (0.01 * ((stock - 60) * 2.5));
            return `rgba(126, 190, 146, ${percent})`;
        }
    }
    
}

export class FruitItem {
    itemName: string;
}