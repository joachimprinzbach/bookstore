import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {BookVolume} from '../custom-types/bookVolume';

@Injectable()
export class GoogleBooksService {

  private API_PATH_MY_BOOKS: string = 'https://www.googleapis.com/books/v1/users/115315262558340554382/bookshelves/1001/volumes';

  constructor(private http: Http) {
  }

  getShelf(): Observable<BookVolume[]>  {
    return this.http.get(this.API_PATH_MY_BOOKS)
      .map(res => res.json().items);
  }

}
 