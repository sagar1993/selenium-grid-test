// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['spec.js'],
  multiCapabilities: [{
    shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        browserName: 'chrome',
        specs: ['spec.js','spec.js','spec.js']
  }, {
    shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        browserName: 'chrome',
        specs: ['spec.js','spec.js','spec.js']
  }, {
    	shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        browserName: 'firefox',
        specs: ['spec.js','spec.js','spec.js']
  }, {
    	shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        browserName: 'firefox',
        specs: ['spec.js','spec.js','spec.js']
  }]
}