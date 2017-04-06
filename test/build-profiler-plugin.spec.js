import BuildProfilerPlugin from '../src/index';
import test from 'ava';

const TYPE_OF_FUNCTION = 'function';

test('BuildProfilerPlugin has the required `apply` method', t => {
  let hasRequiredFunction = typeof new BuildProfilerPlugin().apply === TYPE_OF_FUNCTION;

  t.true(hasRequiredFunction);
});

test('BuildProfilerPlugin has the required `isAcceptableDuration` method', t => {
  let hasRequiredFunction = typeof new BuildProfilerPlugin().isAcceptableDuration === TYPE_OF_FUNCTION;

  t.true(hasRequiredFunction);
});

test('BuildProfilerPlugin.isAcceptableDuration returns true when within the treshold', t => {
  let startTime = new Date().getTime();
  let endTime = startTime + 50;
  let isAcceptableDuration = new BuildProfilerPlugin().isAcceptableDuration(startTime, endTime);

  t.true(isAcceptableDuration);
});

test('BuildProfilerPlugin.isAcceptableDuration returns false when not within the treshold', t => {
  let startTime = new Date().getTime();
  let endTime = startTime + 5000;
  let isAcceptableDuration = new BuildProfilerPlugin().isAcceptableDuration(startTime, endTime);

  t.false(isAcceptableDuration);
});