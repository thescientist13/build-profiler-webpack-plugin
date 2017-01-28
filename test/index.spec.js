import test from 'ava';
import BuildProfilerPlugin from '../src/index';


/*
 * what would be a good POC?
 * 1. get build stats from webpack compilation and assert it is within a certain range
 * 2. get build stats from webpack compilation and assert it is within a certain range
 *
 * Notes:
 * - need a fixture for this, or can we just test the class first, eg. it has the apply method
 *
 */

test('BuildProfilerPlugin has a required `apply` method', t => {
  const hasRequiredFunction = typeof BuildProfilerPlugin.apply === 'function';

  t.true(hasRequiredFunction);
});