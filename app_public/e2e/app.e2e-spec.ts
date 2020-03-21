import { SonyaPublicPage } from './app.po';

describe('sonya-public App', function() {
  let page: SonyaPublicPage;

  beforeEach(() => {
    page = new SonyaPublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
