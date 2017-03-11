import { Angular2SpringBootStarterPage } from './app.po';

describe('angular2-spring-boot-starter App', () => {
  let page: Angular2SpringBootStarterPage;

  beforeEach(() => {
    page = new Angular2SpringBootStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
