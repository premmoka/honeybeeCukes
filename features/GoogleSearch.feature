Feature: Google Search

Scenario Outline: Search from google.com
	Given The user navigates to: "https://www.google.co.uk"
	When The user enters value <SearchData> in "SearchEdit"
	And The user clicks on "SearchButton"
	Then The field "SearchResults" content count is greater than 0
	And The field "SearchResults" content at index <IndexPos> is equal to <IndexValue>
	
	Examples:
		| SearchData 	| IndexPos 	| IndexValue 								|
		| CWS 			| 0 		| CWS - Wikipedia, the free encyclopedia 	|
		| cws 			| 3 		| CWS Engineering 							|
		
