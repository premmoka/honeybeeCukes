'use strict';

( function () {

	var getElement = function(elementName, callback) {
		var element = null;
		
		if (elementName == 'SearchEdit') {
			element = dv.findElement(By.name('q'));
		}		
		else if (elementName == 'SearchButton') {
			element = dv.findElement(By.name('btnG'));
		}
		else {
			console.log("DEBUG - getElement - Element: " + elementName + ", not defined");
		}	
		
		return element;
	}

	var getElementContent = function(elementName, callback) {
		if (elementName == 'SearchResults') {					
			dv.findElements(By.className("r")).then(function(arrValues) {
				var arrValuesSize = arrValues.length;				
				var counter = 0;
				arrValues.forEach(function(valueItem, index){
					valueItem.getText().then(function(textValue) {						
						arrValues[index] = textValue;						
						counter ++;						
						if (counter == arrValuesSize) {
							callback(arrValues);	
						}
					})
				})
			})
		}
		else {
			console.log("DEBUG - getElement - Element: " + elementName + ", not defined");
		}		
	}

	
	var GoogleSearchPage = function () {
    };
		
    GoogleSearchPage.prototype.getElement = getElement;
	GoogleSearchPage.prototype.getElementContent = getElementContent;
    module.exports = new GoogleSearchPage();

} )();