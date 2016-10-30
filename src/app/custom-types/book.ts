import {IndustryIdentifier} from './industryIdentifier';

export interface Book {
    title: string;
    subtitle: string; 
    description: string; 
    authors: string[];
    publisher: string;
    publishedDate: string; 
    industryIdentifiers: IndustryIdentifier[];
    readingModes: any;
    pageCount: number;
    printType: string; 
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: "NOT_MATURE";
    contentVersion: string;
    imageLinks: any; 
    language: string;
    previewLink: string;
    infoLink: string;
    canocicalVolumeLink: string;

}