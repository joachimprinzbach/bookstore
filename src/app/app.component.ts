import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {GoogleBooksService} from './google-books/google-books.service';
import {Observable} from 'rxjs';
import {BookVolume} from './custom-types/bookVolume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase example';
  items: FirebaseListObservable<any[]>;
  books: Observable<BookVolume[]>;

  constructor(angularFire: AngularFire, googleBookService: GoogleBooksService) {
    this.items = angularFire.database.list('/');
    this.books = googleBookService.getShelf();
  }
}
