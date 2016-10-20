import { LiveCommentaryPage } from './app.po';

describe('live-commentary App', function() {
  let page: LiveCommentaryPage;

  beforeEach(() => {
    page = new LiveCommentaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
