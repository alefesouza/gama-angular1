import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getCounterText() {
    return element(by.id('contador')).getText();
  }

  getAumentarButton() {
    return element(by.id('aumentar'));
  }

  getDiminuirButton() {
    return element(by.id('diminuir'));
  }

}
