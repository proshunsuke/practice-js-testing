const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('User visits signup page', function() {

    const browser = new Browser();

    before(function() {
        return browser.visit('/');
    });

    describe('submits form', function() {
        it('should be successful', function() {
            browser.assert.success();
        });
    });

});