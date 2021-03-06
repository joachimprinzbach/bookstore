import {Book} from './book';

export interface BookVolume {
    id?: string;
    selfLink?: string;
    volumeInfo?: Book;
    firebaseKey?: string;
    status?: string;
}