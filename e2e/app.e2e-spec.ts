import { BookstorePage } from './app.po';

describe('bookstore App', function() {
  let page: BookstorePage;

  beforeEach(() => {
    page = new BookstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
