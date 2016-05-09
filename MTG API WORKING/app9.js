


var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http){
	$scope.search1 = 'Chocolate';
	$scope.search2 = 'Money!!';
	$scope.format = 'M/d/yy h:mm:ss a';
	$scope.jsonCards = jsonCards;
	
	$scope.set = 'ons';
	$scope.type = 'zombie';
	$scope.color = 'black';
	$scope.subtype = 'angel';
	
	//Filling menu options
	$scope.types = [];
	$scope.subtypes = [];
	$scope.supertypes = [];
	$scope.sets = [];
	$scope.rarities = [];
	$scope.colors = [];

	$scope.search = '';
	
	$scope.byPower = [];
	$scope.byToughness = [];
	$scope.byCMC = [];
	
	$scope.filterPower = function(d){
		$scope.byPower = [];
		for(i=0; i<d.length; i++){
			//if(card.power == $scope.search.power){
				$scope.byPower.push(d[i].power);
				//}
			}
		}
		
	$scope.filterToughness = function(d){	
		$scope.byToughness = [];
		for(i=0; i<d.length; i++){
			//if(card.toughness == $scope.search.toughness){
				$scope.byToughness.push(d[i].toughness);
				//}
			}
		}
		
	$scope.filterCMC = function(d){
		$scope.byCMC = [];	
		for(i=0; i<d.length; i++){
			//if(card.cmc == $scope.search.cmc){
				$scope.byCMC.push(d[i].cmc);
				//}
			}
		}
		
	$scope.PTC = function(d){
		$scope.byPower = [];
		$scope.byToughness = [];
		$scope.byCMC = [];	
		for(i=0; i<d.length; i++){
			//if(card.cmc == $scope.search.cmc){
			
			if(d[i].power != null)
				$scope.byPower.push(d[i].power);
				
			if(d[i].toughness != null)
				$scope.byToughness.push(d[i].toughness);
				
				$scope.byCMC.push(d[i].cmc);
				//}
			}
		}

	
	
	$scope.hello = function() {
			$http({
		  method: 'GET',
		  url: 'https://api.deckbrew.com/mtg/cards?set=' + $scope.set + '&color=' + $scope.color //'&subtype=' + $scope.subtype
		}).success(function(data) {
			
			$scope.jsonCards = data;
			$scope.PTC(data);
			console.log($scope.jsonCards);
		  }).
		   error(function (data, status) {
			  if (status === 404) {
				$scope.error = 'That repository does not exist';
			  } else {
				$scope.error = 'Error: ' + status;
			  }
			});		
	};
	
	$scope.getTypes = function() {  
			$http({
		  method: 'GET',
		  url: 'https://api.deckbrew.com/mtg/types'
		}).success(function(data) {
			$scope.types = data;
			
		  }).error(function (data, status) {
			  if (status === 404) {
				$scope.error = 'That repository does not exist';
			  } else {
				$scope.error = 'Error: ' + status;
			  }
			});		
			};
			
	$scope.getSubTypes = function() {  
			$http({
		  method: 'GET',
		  url: 'https://api.deckbrew.com/mtg/subtypes'
		}).success(function(data) {
			$scope.subtypes = data;
			
		  }).error(function (data, status) {
			  if (status === 404) {
				$scope.error = 'That repository does not exist';
			  } else {
				$scope.error = 'Error: ' + status;
			  }
			});		
			};
			
	$scope.getSuperTypes = function() {  
			$http({
		  method: 'GET',
		  url: 'https://api.deckbrew.com/mtg/supertypes'
		}).success(function(data) {
			$scope.supertypes = data;
			
		  }).error(function (data, status) {
			  if (status === 404) {
				$scope.error = 'That repository does not exist';
			  } else {
				$scope.error = 'Error: ' + status;
			  }
			});		
			};
			
	$scope.getSets = function() {  
			$http({
		  method: 'GET',
		  url: 'https://api.deckbrew.com/mtg/sets'
		}).success(function(data) {
			$scope.sets = data;
			
		  }).error(function (data, status) {
			  if (status === 404) {
				$scope.error = 'That repository does not exist';
			  } else {
				$scope.error = 'Error: ' + status;
			  }
			});		
			};
			
	$scope.getColors = function() {  
			$http({
		  method: 'GET',
		  url: 'https://api.deckbrew.com/mtg/colors'
		}).success(function(data) {
			$scope.colors = data;
			
		  }).error(function (data, status) {
			  if (status === 404) {
				$scope.error = 'That repository does not exist';
			  } else {
				$scope.error = 'Error: ' + status;
			  }
			});		
			};
			
	
			

	$scope.getTypes();
	$scope.getSubTypes();
	$scope.getSuperTypes();
	$scope.getSets();
	$scope.getColors();

	
	
	});


