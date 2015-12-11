app.controller('MainController', ['$scope', function($scope) {

	$scope.locale = 'enUS';

	if ($scope.locale == 'enUS') {
		$scope.whatIsItTitle = 'What is it?';
		$scope.whatIsItText = 'It\'s rather simple.  With VélÔ\'Toulouse, bikes come and go.\nSure, you can get the current amount of bikes at a station, but this value changes.  You could very well be left with a full station when you arrive at the supermarket.  That\'d be annoying.\n What we go is keeping track of the bikes data, at all times.  With enough data, we\'ll be able to predict what is going to happen to the bikes at the station you\'re looking at.';
	}


	$scope.station = {  
	   "number":55,
	   "name":"00055 - ST SERNIN G. ARNOULT",
	   "address":"2 RUE GATIEN ARNOULT",
	   "position":{  
	      "lat":43.608951960496405,
	      "lng":1.441003598726198
	   },
	   "banking":true,
	   "bonus":false,
	   "status":"OPEN",
	   "contract_name":"Toulouse",
	   "bike_stands":15,
	   "available_bike_stands":11,
	   "available_bikes":4,
	   "last_update":1449875929000
	};
}]);