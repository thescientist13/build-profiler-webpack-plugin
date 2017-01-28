import test from 'ava';
import MyOffsetClass from '../src/index';

test('MyOffsetClass returns default value of 4', t => {
  const offset = new MyOffsetClass().calcOffset();

  t.deepEqual(4, offset);
});

test('MyOffsetClass returns provided value of 10', t => {
  const customValue = 10;
  const offset = new MyOffsetClass().calcOffset(customValue);

  t.deepEqual(customValue, offset);
});