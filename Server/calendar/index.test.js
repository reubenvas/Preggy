/* eslint-disable no-undef */
const assert = require('assert');
const { calculateDueDate, calculateWeek, calculateAdditionalDays } = require('./index');


const defaultDate = new Date('2019-04-03');

describe('testing due date calculator', () => {
  it('should return a (date) object', () => {
    assert.equal(typeof calculateDueDate('2019-03-13'), 'object');
  });
  it('should return date 280 days after input', () => {
    assert.deepEqual(calculateDueDate('2019-04-03'), new Date('2020-01-08'));
  });
});

describe('testing week calculator', () => {
  it('should return a (week) number', () => {
    assert.equal(typeof calculateWeek(defaultDate, new Date('2020-11-08')), 'number');
  });
  it('should return valid week', () => {
    assert.ok(calculateWeek(defaultDate, new Date('2019-06-08')) <= 40 && calculateWeek(defaultDate, new Date('2019-06-08')) >= 1);
  });
  it('should calculate week', () => {
    assert.equal(calculateWeek(defaultDate, new Date('2019-10-01')), 15);
    assert.equal(calculateWeek(defaultDate, new Date('2019-08-04')), 23);
    assert.equal(calculateWeek(defaultDate, new Date('2019-09-16')), 17);
    assert.equal(calculateWeek(defaultDate, new Date('2019-11-18')), 8);
    assert.equal(calculateWeek(defaultDate, new Date('2019-11-29')), 6);
  });
});

describe('Testing week+days calculator', () => {
  it('should return the proper "week + day(s)"', () => {
    assert.equal(calculateAdditionalDays(defaultDate, new Date('2019-11-29')), '5 + 4');
    assert.equal(calculateAdditionalDays(defaultDate, new Date('2019-11-23')), '6 + 3');
  });
  it('should calculate beggining and end of week', () => {
    assert.equal(calculateAdditionalDays(defaultDate, new Date('2019-11-20')), '6 + 6');
    assert.equal(calculateAdditionalDays(defaultDate, new Date('2019-11-19')), '7 + 0');
  });
});
