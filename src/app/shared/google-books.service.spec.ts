import {TestBed, inject} from '@angular/core/testing';
import {BaseRequestOptions, Http, HttpModule, ResponseOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Book} from '../custom-types/book';
import {GoogleBooksService, API_PATH_SINGLE_BOOK} from './google-books.service';

const mockedHttpProvider = {
    provide: Http,
    deps: [MockBackend, BaseRequestOptions],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backend, defaultOptions);
    }
};

describe('Service: GoogleBooks', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                GoogleBooksService,
                BaseRequestOptions,
                MockBackend,
                mockedHttpProvider
            ],
        });
    });

    it('should call the google books api',
        inject([GoogleBooksService, MockBackend], (service: GoogleBooksService, backend: MockBackend) => {
            let queryId: string = "someId";
            let expectedResponse: Book = {
                description: 'Angular2',
                title: 'Der untergang des Testing'
            };

            backend.connections.subscribe(connection => {
                expect(connection.request.url).toBe(API_PATH_SINGLE_BOOK + queryId);
                let response = new ResponseOptions({body: JSON.stringify(expectedResponse)});
                connection.mockRespond(new Response(response));
            });

            service.getBookByGoogleBookId(queryId).subscribe(response => {
                expect(response).toEqual(expectedResponse);
            })
        })
    );
});
