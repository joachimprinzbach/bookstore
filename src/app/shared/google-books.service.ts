import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {BookVolume} from '../custom-types/bookVolume';
import {Book} from '../custom-types/book';

@Injectable()
export class GoogleBooksService {

    private API_PATH_MY_BOOKS: string = 'https://www.googleapis.com/books/v1/users/115315262558340554382/bookshelves/1001/volumes';
    private API_PATH_SINGLE_BOOK: string = 'https://www.googleapis.com/books/v1/volumes/';

    constructor(private http: Http) {
    }

    getShelf(): Observable<BookVolume[]> {
        return this.http.get(this.API_PATH_MY_BOOKS)
            .map(res => res.json().items);
    }

    getBookByGoogleBookId(id: string): Observable<Book> {
        return this.http.get(this.API_PATH_SINGLE_BOOK + id)
            .map(res => res.json());
    }

}
 