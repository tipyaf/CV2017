import { Cv2017Page } from './app.po';

describe('cv2017 App', function() {
  let page: Cv2017Page;

  beforeEach(() => {
    page = new Cv2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
