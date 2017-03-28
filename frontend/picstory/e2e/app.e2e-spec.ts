import { PicstoryPage } from './app.po';

describe('picstory App', () => {
  let page: PicstoryPage;

  beforeEach(() => {
    page = new PicstoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
