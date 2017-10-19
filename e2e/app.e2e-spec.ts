import { PracticaAngularPage } from './app.po';

describe('practica-angular App', function() {
  let page: PracticaAngularPage;

  beforeEach(() => {
    page = new PracticaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
