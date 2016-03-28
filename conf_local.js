exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities    : {
        browserName : 'chrome',
		shardTestFiles: true,
		maxInstances: 1
    },
	
	specs : [ 'features/*.feature' ],

	framework : 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),

	cucumberOpts : {
		require : 'step_definitions/JSTestFramework.js',
		format  : 'pretty'
	},

	onPrepare: function(){		
		browser.ignoreSynchronization = true;
		browser.manage().timeouts().pageLoadTimeout(1000);
		browser.manage().timeouts().implicitlyWait(1000);
		
		global.dv = browser.driver;
		global.debugMode = false;		
	},
	
}