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
    style
} from '@angular/core';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { StatItem } from '../models/index';
import { StatsSearchService } from './stats-search-service';

@Component({
    selector: 'statistics',
    templateUrl: './templates/stats/stats-template.html',
    styleUrls: ['styles/app/stats/stats-style.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ })),
            transition('void => *', [
                animate(400, keyframes([
                    style({ opacity: 0, offset: 0 }),
                    style({ opacity: 1, offset: 1 })
                ]))
            ]),
            transition('* => void', [
                animate(400, keyframes([
                    style({ opacity: 1, offset: 0 }),
                    style({ opacity: 0, offset: 1 })
                ]))
            ])
        ])
    ]
})
export class StatisticsComponent {
    @ViewChild('stockLeft') leftStock: ElementRef;

    statItemList: StatItem[];
    next: number = 0;
    statItemListLag: any[] = [];

    constructor(private _sanitizer: DomSanitizer, private statsService: StatsSearchService) {
        this.statItemList = statsService.searchStats('');
        this.sortItems();
        this.doNext();
    }

    sortItems() {
        this.statItemList = this.statItemList.sort((a, b) =>
            a.itemStockLeft < b.itemStockLeft ? -1 : a.itemStockLeft > b.itemStockLeft ? 1 : 0);
    }

    doNext() {
        if (this.next < this.statItemList.length) {
            this.statItemListLag.push(this.statItemList[this.next++]);
        }
    }

    removeMe(i: number) {
        this.statItemListLag.splice(i, 1);
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