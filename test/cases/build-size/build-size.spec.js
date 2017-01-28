import test from 'ava';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

// TODO test RuntimeError when build take too long

test.cb('BuildProfilerPlugin passes when build takes the expected duration', t => {

  webpack(webpackConfig, function(err, stats) {

    if (err) {
      return t.end(err);
    } else if (stats.hasErrors()) {
      return t.end(stats.toString());
    }

    t.end();

  });

});