# webpack-build-profiler

## Overview
A Webpack plugin for getting useful statistics and feedback of your build with threshold and failure options.  The advantage being that this plugin will profile your build so that you can be alerted to issues / mistakes in a Webpack configuration like:
- The build being too big
- The build being too small
- Statistics of the build's composition (percantage of JS / CSS / images, etc)
- Other options TBD

## Install
`npm install webpack-build-profiler --save-dev`

## Usage
If you have a production config, include this plugin there 
```javascript
plugins: [
  
  new BuildProfilerPlugin({
    //your options here
  }),
```

Sample output
```bash
== Build Composition ==
JavaScript: 0.8MB
CSS: 0.2MB
Images: 0.5MB

== Build Profile ==
Speed Treshold: 2m
Size Threshold: 1MB - 2MB

Total Bundle Size: 1.5MB
Total Time To Build: 1.56 minutes

== Final Status == 
Success (all metrics within threshold)
```

## Options
```javascript
{
  timeTreshold:  120,  //# of seconds
  buildSizeTreshold:  {  //in MB
    min:  1,
    max:  2
  },
  buildCompositionTreshold: {  //in MB
    javascript: 1,
    css: 1,
    image: 1
  }
}
```
