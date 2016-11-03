import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {BookVolume} from '../custom-types/bookVolume';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

    @Input()
    book: BookVolume;
    @Output()
    reserveBook =  new EventEmitter<BookVolume>();
    @Output()
    returnBook =  new EventEmitter<BookVolume>();
    @Output()
    syncBook =  new EventEmitter<BookVolume>();
}