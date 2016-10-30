import {Component, Input} from '@angular/core';
import {BookVolume} from '../custom-types/bookVolume';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  @Input()
  books: BookVolume[];
}
