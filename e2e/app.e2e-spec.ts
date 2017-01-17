import { Week1t1Page } from './app.po';

describe('week1t1 App', function() {
  let page: Week1t1Page;

  beforeEach(() => {
    page = new Week1t1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
