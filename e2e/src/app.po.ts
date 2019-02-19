import { browser, by, element } from 'protractor';

export class AppPage {
  // tslint:disable-next-line:typedef
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  // tslint:disable-next-line:typedef
  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
