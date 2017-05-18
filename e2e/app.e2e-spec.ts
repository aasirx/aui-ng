import { AuiNgPage } from './app.po';

describe('aui-ng App', () => {
  let page: AuiNgPage;

  beforeEach(() => {
    page = new AuiNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
