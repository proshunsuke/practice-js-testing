/**
 * Created by pro on 15/06/14.
 */
let assert = require('power-assert');
let func = require('../sample/func');

describe('Func', () => {
    it('正しい値の時add出来ること', () => {
        let result = func.add(1, 1);
        assert.equal(2, result);
    });

    it('正しい値の時minus出来ること', () => {
        let result = func.minus(2, 1);
        assert.equal(1, result);
    });
});
