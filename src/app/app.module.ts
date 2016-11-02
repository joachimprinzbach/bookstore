import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AppComponent} from './app.component';
import {GoogleBooksService} from './shared/google-books.service';
import {BookComponent} from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { LayoutComponent } from './layout/layout.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBj1PXcwjmVh5mRrWK5kEThuFK5dXLFibQ",
    authDomain: "bookstore-3ed32.firebaseapp.com",
    databaseURL: "https://bookstore-3ed32.firebaseio.com",
    storageBucket: "bookstore-3ed32.appspot.com",
    messagingSenderId: "597645479089"
};


@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        BookListComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [GoogleBooksService],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
