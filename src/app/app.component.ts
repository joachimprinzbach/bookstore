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
    firebaseBooks: FirebaseListObservable<any>;

    constructor(private angularFire: AngularFire, private googleBookService: GoogleBooksService) {
    }

    ngOnInit() {
        this.firebaseBooks = this.angularFire.database.list('/items');
        this.books = Observable.combineLatest(this.googleBookService.getShelf(), this.firebaseBooks)
            .map(data => {
                let books: BookVolume[] = data[0];
                let items: BookStatus[] = data[1];
                return books.map(book => {
                    let correspondingFirebaseObj: BookStatus = items.find(item => item.id === book.id);
                    let bookExistsInFirebase: boolean = !!correspondingFirebaseObj;
                    book.volumeInfo.synced = bookExistsInFirebase;
                    if(bookExistsInFirebase) {
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
