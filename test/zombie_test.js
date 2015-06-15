process.env.NODE_ENV = 'test';

let app = require('../app');
let http = require('http');
let server;

let Browser = require('zombie');
describe('インデックスページ', () => {

    before(() => {
        server = http.createServer(app).listen(3000);
    });

    describe('セットアップ', () => {
        let browser = new Browser({
            site: 'http://localhost:3000'
        });

        before((done) => {
            browser.visit('/', done);
        });

        it('インデックスページにアクセス出来ること', () => {
            browser.assert.success();
        });

    });

    after( (done) => {
        server.close(done);
    });
});
