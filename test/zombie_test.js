process.env.NODE_ENV = 'test';

let app = require('../app');
let http = require('http');

let Browser = require('zombie');
describe('User visits signup page', () => {

    before(() => {
        this.server = http.createServer(app).listen(3000);
    });

    describe('hello world', () => {
        let browser = new Browser({ site: 'http://localhost:3000'});

        before((done) => {
            browser.visit('/', done);
        });

        describe('/にアクセス出来ること', () =>{
            it('should be successful', () => {
                browser.assert.success();
            });
        });
    });

    after( (done) => {
        this.server.close(done);
    });
});
