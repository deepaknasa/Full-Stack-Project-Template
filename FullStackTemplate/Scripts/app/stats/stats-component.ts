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
import { DOCUMENT } from '@angular/platform-browser';

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
    statItemList: any[] = [
        { itemName: 'potato' },
        { itemName: 'apple' },
        { itemName: 'rasberry' },
        { itemName: 'tomato' },
        { itemName: 'orange' }
    ];
    next: number = 0;
    statItemListLag: any[] = [];

    constructor() {
        this.doNext();
    }

    doNext() {
        if (this.next < this.statItemList.length) {
            this.statItemListLag.push(this.statItemList[this.next++]);
        }
    }

    removeMe(i: number) {
        this.statItemListLag.splice(i, 1);
    }
    
}

export class FruitItem {
    itemName: string;
}