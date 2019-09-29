// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('https://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});