import { NowaPage } from './app.po';

describe('nowa App', function() {
  let page: NowaPage;

  beforeEach(() => {
    page = new NowaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nowa works!');
  });
});
