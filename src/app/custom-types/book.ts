import {IndustryIdentifier} from './industryIdentifier';

export interface Book {
    title?: string;
    subtitle?: string; 
    description?: string; 
    authors?: string[];
    publisher?: string;
    publishedDate?: string; 
    industryIdentifiers?: IndustryIdentifier[];
    pageCount?: number;
    categories?: string[];
    averageRating?: number;
    imageLinks?: any;
    language?: string;
    previewLink?: string;
    infoLink?: string;
    synced?: boolean;
}