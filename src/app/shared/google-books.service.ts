import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {BookVolume} from '../custom-types/bookVolume';
import {Book} from '../custom-types/book';

export const API_PATH_SINGLE_BOOK: string = 'https://www.googleapis.com/books/v1/volumes/';

@Injectable()
export class GoogleBooksService {

    private API_PATH_MY_BOOKS: string = `https://www.googleapis.com/books/v1/users/115315262558340554382/bookshelves/
    1001/volumes?maxResults=100&fields=items(id%2CselfLink%2CvolumeInfo(authors%2CaverageRating%2Ccategories%2Cdescription%2C
    imageLinks%2CindustryIdentifiers%2CinfoLink%2Clanguage%2CmainCategory%2CpageCount%2CpreviewLink%2CprintedPageCount%2C
    publishedDate%2Cpublisher%2CreadingModes%2CseriesInfo%2Csubtitle%2Ctitle))&key=AIzaSyC4crmvv4Yk-rKTkyYMBKysLMbWUjk-8jo`;

    constructor(private http: Http) {
    }

    getShelf(): Observable<BookVolume[]> {
        return this.http.get(this.API_PATH_MY_BOOKS)
            .map(res => res.json().items);
    }

    getShelfMock(): Observable<BookVolume[]> {
        return this.http.get('../../assets/data.json')
            .map(res => res.json().items);
    }

    getBookByGoogleBookId(id: string): Observable<Book> {
        return this.http.get(API_PATH_SINGLE_BOOK + id)
            .map(res => res.json());
    }

}
 