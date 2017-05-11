import { CerebroSPAPage } from './app.po';

describe('cerebro-spa App', () => {
  let page: CerebroSPAPage;

  beforeEach(() => {
    page = new CerebroSPAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
