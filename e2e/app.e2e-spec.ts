import { GachagachaPage } from './app.po';

describe('gachagacha App', () => {
  let page: GachagachaPage;

  beforeEach(() => {
    page = new GachagachaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
