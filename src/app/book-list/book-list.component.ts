import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {BookVolume} from '../custom-types/bookVolume';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {

    @Input()
    books: BookVolume[];
    @Output()
    reserveBook = new EventEmitter<BookVolume>();
    @Output()
    returnBook = new EventEmitter<BookVolume>();
    @Output()
    syncBook = new EventEmitter<BookVolume>();
}
