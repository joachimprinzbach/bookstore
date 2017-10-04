import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from './shared/google-books.service';
import {BookVolume} from './custom-types/bookVolume';
import {BookStatus} from './custom-types/bookStatus';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database/interfaces';
import {Observable} from 'rxjs/Observable';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    books: Observable<BookVolume[]>;
    firebaseBooks: AngularFireList<BookStatus>;

    constructor(private angularFire: AngularFireDatabase, private googleBookService: GoogleBooksService) {
    }

    ngOnInit() {
        this.firebaseBooks = this.angularFire.list<BookStatus>('items');
        this.books = combineLatest(this.googleBookService.getShelf(), this.firebaseBooks.valueChanges())
            .map(data => {
                let books: BookVolume[] = data[0];
                let items: any[] = data[1];
                return books.map(book => {
                    let correspondingFirebaseObj: BookStatus = items.find(item => item.id === book.id);
                    let bookExistsInFirebase: boolean = !!correspondingFirebaseObj;
                    book.volumeInfo.synced = bookExistsInFirebase;
                    if (bookExistsInFirebase) {
                        book.firebaseKey = correspondingFirebaseObj['$key'];
                        book.status = correspondingFirebaseObj.status;
                    }
                    return book;
                });
            });
    }

    reserveBook(book: BookVolume) {
        let newBookStatus: BookStatus = {
            id: book.id,
            status: "RESERVED"
        };
        this.firebaseBooks.update(book.firebaseKey, newBookStatus);
    }

    returnBook(book: BookVolume) {
        let newBookStatus: BookStatus = {
            id: book.id,
            status: "IN_SHELF"
        };
        this.firebaseBooks.update(book.firebaseKey, newBookStatus);
    }

    syncBook(book: BookVolume) {
        let newBookStatus: BookStatus = {
            id: book.id,
            status: "IN_SHELF"
        };
        this.firebaseBooks.push(newBookStatus);
    }
}
