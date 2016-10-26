app.controller('MainController', ['$scope', '$http', 'stationList', function($scope, $http, stationList) {

	$scope.locale = 'enUS';

	$scope.stations = [];

	if ($scope.locale == 'enUS') {
		$scope.whatIsItTitle = 'What is it?';
		$scope.whatIsItText = 'It\'s rather simple.  With VélÔ\'Toulouse, bikes come and go.\nSure, you can get the current amount of bikes at a station, but this value changes.  You could very well be left with a full station when you arrive at the supermarket.  That\'d be annoying.\n What we go is keeping track of the bikes data, at all times.  With enough data, we\'ll be able to predict what is going to happen to the bikes at the station you\'re looking at.';
	}



	//Initializing GMap
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
      center: new google.maps.LatLng(43.6008912,1.4389252),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false
    };
   	var map = new google.maps.Map(mapCanvas, mapOptions);

   	var stationLocations = [];
	stationList.success(function(data) { 

	    $scope.stations = data; 
	    
	    for (i = 0; i < data.length; i++) {

	   		var marker = new google.maps.Marker({
	   			position: new google.maps.LatLng(data[i].position.lat, data[i].position.lng),
	   			map: map,
	   			number: data[i].number
	   		})

	   		google.maps.event.addListener(marker, 'click', function() {

	   			$http.get('https://api.jcdecaux.com/vls/v1/stations/' + this.number + '?contract=Toulouse&apiKey=eb86bdd7ffe3afcd9c7e6babdcf837af420146f4') 
		            .success(function(data) { 
		            	$scope.currentStation = data;
		            }) 
		            .error(function(err) { 
		            	console.log(err); 
		            }); 
	   		});

	   		stationLocations[i] = marker;
	   	}
	})


}]);