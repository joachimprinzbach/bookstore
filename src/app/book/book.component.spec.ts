import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookComponent} from './book.component';
import {MaterialModule} from '@angular/material';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {BookVolume} from 'app/custom-types/bookVolume';

@Component({
    template: `<book  [book]="book"></book>`
})
class TestHostComponent {
    book: BookVolume = {
        volumeInfo: {
            description: "description",
            title: "title",
            authors: ["a1", "a2"],
            imageLinks: {}
        }
    }
}
describe('BookComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let bookElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookComponent, TestHostComponent],
            imports: [MaterialModule.forRoot()]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should bind the book correctly', () => {
        bookElement = fixture.debugElement.query(By.css('.footer'));
        expect(bookElement.children[0].nativeElement.textContent).toBe("a1,a2");
    });

});

