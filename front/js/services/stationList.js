app.factory('stationList', ['$http', function($http) { 
  return $http.get('https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=eb86bdd7ffe3afcd9c7e6babdcf837af420146f4') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);