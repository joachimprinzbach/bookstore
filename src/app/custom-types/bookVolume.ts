import {Book} from './book';

export interface BookVolume {
    accessInfo: any; 
    searchInfo: any; 
    saleInfo: any;
    kind: string; 
    id: string;
    etag: string;
    selfLink: string; 
    volumeInfo: Book;

}