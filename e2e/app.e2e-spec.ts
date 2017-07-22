import { Angular4WorkshopPage } from './app.po';

describe('angular4-workshop App', () => {
  let page: Angular4WorkshopPage;

  beforeEach(() => {
    page = new Angular4WorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
