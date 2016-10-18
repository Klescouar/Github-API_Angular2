import { GithubAPIPage } from './app.po';

describe('github-api App', function() {
  let page: GithubAPIPage;

  beforeEach(() => {
    page = new GithubAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
