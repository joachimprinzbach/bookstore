import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {GoogleBooksService} from './shared/google-books.service';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import {BookVolume} from './custom-types/bookVolume';
import {BookStatus} from './custom-types/bookStatus';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    books: Observable<BookVolume[]>;

    constructor(private angularFire: AngularFire, private googleBookService: GoogleBooksService) {
    }

    ngOnInit() {
        this.books = Observable.combineLatest(this.googleBookService.getShelfMock(), this.angularFire.database.list('/items'))
            .map(data => {
                let books: BookVolume[] = data[0];
                let items: BookStatus[] = data[1];
                return books.map(book => {
                    book.volumeInfo.synced = items.some(item => item.id === book.id);
                    return book;
                });
            });
    }
}
