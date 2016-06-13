export class NowaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nowa-app h1')).getText();
  }
}
