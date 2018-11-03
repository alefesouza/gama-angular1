import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();

    page.getAumentarButton().click();
    page.getAumentarButton().click();
    page.getAumentarButton().click();

    expect(page.getCounterText()).toBe('3');
  });
});
