import { Component, OnChanges, OnInit,
        OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit, OnDestroy {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string>  = new EventEmitter<string>();
    starWidth: number;
    ngOnChanges(): void {
        console.log('>>>no change');
        this.starWidth = this.rating * 86 / 6;
    }
    ngOnInit(): void {
        console.log('>>>ngInit');
    }

    ngOnDestroy(): void {
        console.log('>>>ngOnDestroy');
    }

    onStar(): void {
        this.ratingClicked.emit(`The Rating clicked is ${this.rating}`);
    }
}
