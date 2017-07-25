import { Ng4App1Page } from './app.po';

describe('ng4-app1 App', () => {
  let page: Ng4App1Page;

  beforeEach(() => {
    page = new Ng4App1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
