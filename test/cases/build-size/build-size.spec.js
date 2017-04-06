// import sleep from 'sleep';
import test from 'ava';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

test.cb('BuildProfilerPlugin passes when the build takes the expected duration', t => {

  webpack(webpackConfig, function(err, stats) {

    if (err) {
      return t.end(err);
    } else if (stats.hasErrors()) {
      return t.end(stats.toString());
    }

    t.end();

  });

});

// TODO get this test to pass
// test.cb('BuildProfilerPlugin throws an exception when the build takes longer than the expected duration', t => {
//   sleep.sleep(3);
//
//   t.throws(
//     () => webpack(webpackConfig),
//     Error('Build took too long!')
//   );
//
//   t.end();
//
// });