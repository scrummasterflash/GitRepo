module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angularfire/dist/angularfire.min.js',
      'js/vendor/lvl-uuid.js',
      'js/vendor/lvl-drag-drop.js',
      'node_modules/ng-dialog/js/ngDialog.min.js',
      'node_modules/angular-aria/angular-aria.min.js',
      'node_modules/angular-sanitize/angular-sanitize.min.js',
      'node_modules/ng-file-upload/dist/ng-file-upload-all.min.js',
      'node_modules/papaparse/papaparse.min.js',
      'js/**/*.js',
      'test/**/*Test.js',
    ],

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/*.js': ['coverage']
    },
    coverageReporter: {
      repoToken: 'QVdqIxSZvbUFLmSiYZ3uINtguZxhuBgy7',
      type: 'lcov',
      dir: 'coverage/'
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan', 'coverage'],

    // web server port
    port: 9876,
    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-nyan-reporter',
      'karma-mocha-reporter',
      'karma-sinon',
    ]
  })
}
