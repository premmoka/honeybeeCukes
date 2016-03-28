
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
var GoogleSearchPage = require('../pages/PageObjects.js');
var ContextManagement = require('../context/ContextManagement.js');

//================= ACTIONS =====================================================
this.Given(/^.*navigates to.* "(.*)"$/, function (strURL, callback) {
	
	if (debugMode) {
		console.log("DEBUG - Navigating to: " + strURL);
	}
	
	ContextManagement.setCurrentURL();
	dv.get(strURL).then(function() {
		callback();
	})
});

this.When(/^The user enters value (.*) in "(.*)"$/, function (value, objectName, callback) {
	
	if (debugMode) {
		console.log("DEBUG - Entering value: " + value + " into: " + objectName);
	}
	
	ContextManagement.setCurrentURL();
	var objectElement = GoogleSearchPage.getElement(objectName);
	objectElement.sendKeys(value);
	callback();
});

this.When(/^The user clicks on "(.*)"$/, function (objectName, callback) {
	if (debugMode) {
		console.log("DEBUG - Clicking on: " + objectName);
	}
	
	ContextManagement.setCurrentURL();
	var objectElement = GoogleSearchPage.getElement(objectName);
	objectElement.click();
	callback();
});

//================= VALIDATIONS =====================================================
this.Then(/^.*remains on the same URL$/, function (callback) {
	if (debugMode) {
		console.log("DEBUG - Assertion - Remains on the same URL");
	}
	
	var previousURL = ContextManagement.getCurrentURL();
	dv.getCurrentUrl().then(function(theCurrentURL) {
		expect(theCurrentURL).to.equal(previousURL);	
		callback();
	})
});

this.Then(/^The field "(.*)" content count is greater than (.*)$/, function (objectName, counter, callback) {
	if (debugMode) {
		console.log("DEBUG - Assertion - Object list content: " + objectName + ", is greater than: " + counter);
	}
	
	GoogleSearchPage.getElementContent(objectName, function(objectValues) {
		expect(objectValues.length).to.be.above(counter);	
		callback();
	});	
});

this.Given(/^The field "(.*)" content at index (.*) is equal to (.*)$/, function (objectName, indexPosition, value, callback) {
	if (debugMode) {
		console.log("DEBUG - Assertion - Object list content: " + objectName + ", at index: " + indexPosition +", is equal to: " + value);
	}
	
	GoogleSearchPage.getElementContent(objectName, function(objectValues) {	
		expect(objectValues[indexPosition]).to.equal(value);	
		callback();
	});	});

}