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

## LICENSE
Copyright 2017 Owen Buckley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.