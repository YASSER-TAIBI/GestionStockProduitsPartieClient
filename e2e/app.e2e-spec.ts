import { GestionStockProduitsPartieClientPage } from './app.po';

describe('gestion-stock-produits-partie-client App', function() {
  let page: GestionStockProduitsPartieClientPage;

  beforeEach(() => {
    page = new GestionStockProduitsPartieClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
