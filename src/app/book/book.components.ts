import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {BookVolume} from '../custom-types/bookVolume';

@Component({
    selector: 'book',
    templateUrl: './book.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

    @Input()
    book: BookVolume;
}