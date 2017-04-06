class BuildProfilerPlugin {

  constructor() {}

  isAcceptableDuration(startTime, endTime) {
    return (endTime - startTime) < 1000;
  }

  apply(compiler) {
    compiler.plugin('done', (compilation) => {

      if (!this.isAcceptableDuration(compilation.startTime, compilation.endTime)) {
        throw new Error('Build took too long!');
      }

    });
  }
}

module.exports = BuildProfilerPlugin;