'use strict';

( function () {

	var currentURL = "";

	var setCurrentURL = function() {
		dv.getCurrentUrl().then(function(theCurrentURL) {
			currentURL = theCurrentURL;
		})
		
	}
	var getCurrentURL = function() {
		return currentURL;		
	}
	
	var ContextManagement = function () {
    };
		
    ContextManagement.prototype.setCurrentURL = setCurrentURL;
	ContextManagement.prototype.getCurrentURL = getCurrentURL;
    module.exports = new ContextManagement();

} )();