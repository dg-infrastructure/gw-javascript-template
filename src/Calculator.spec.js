/* eslint no-magic-numbers: 0 */ // simple math checks
import Calculator from './Calculator';

const expect = require('chai').expect;

describe('Calculator', () => {
  it('should add two numbers', () => {
    const sum = Calculator.add(5, 2);
    expect(sum).to.be.eql(7);
  });

  it('should substract two numbers', () => {
    const sub = Calculator.sub(5, 2);
    expect(sub).to.be.eql(3);
  });
});
