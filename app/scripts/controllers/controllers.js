'use strict';

var mainModule = angular.module('main');
  
mainModule.controller('MapCtrl',["$scope", "mapService", function ($scope, mapService) {
	
	//this is all needs to be refactored

	console.log(mapService);

	// $scope.myMarkers = mapService.getMarkers();
	// $scope.geocoder = mapService.getGeocoder();
	$scope.mapOptions = mapService.getInitMapOptions();
	$scope.showModal = true;
	// $scope.mapService = mapService;


	//Watch for changes in the truth
	$scope.$watch(mapService.getMarkers().length, function(newValue) {
		console.log("MARKERS CHANGED!!");
		console.log($scope.myMarkers);
		console.log(newValue);
		console.log(mapService.getMarkers());
		console.log("markers length: " + mapService.getMarkers().length);
        $scope.myMarkers = newValue;
    });

	$scope.geoLocate = function(address) {
		
		//STUBBED GEO LOCATE REWRITE ALL OF THIS IN MAP SERVICE

				var location = new google.maps.LatLng(52.4831, -1.8936);

				$scope.myMap.setCenter(location);

				mapService.initMap($scope.myMap);

				$scope.myMap.setZoom(18);

				var marker = new google.maps.Marker({
		          map: $scope.myMap,
		          position: location
		     	});

				// var marker2 = new google.maps.Marker({
		  //         map: $scope.myMap,
		  //         position: new google.maps.LatLng(52.4833, -1.8939)
		  //    	});

		     	console.log("geoLocate");
		     	console.log(location);

				var influenceCircleOptions = {
				      strokeColor: '#FF0000',
				      strokeOpacity: 0.8,
				      strokeWeight: 2,
				      fillColor: '#FF0000',
				      fillOpacity: 0.35,
				      map: $scope.myMap,
				      center: location,
				      radius: 100
				    };
				    
				    mapService.initInfluenceCircle(influenceCircleOptions);

				    $scope.showModal = false;

				};

	 
	
}]);

mainModule.controller("HeaderCtrl", ["$scope", "playerService", "$timeout", function ($scope, playerService, $timeout) {
	console.log("player service below:");
	console.log(playerService);

	$scope.player = playerService.getPlayer();

	// $scope.playerService = playerService;
	// $scope.$watch('playerService.getPlayer()', function(newValue) {
 //        $scope.player = newValue;
 //    });


    // playerService.startGame();

    // $scope.gameRunning = true;

    $scope.pauseGame = function() {
    	console.log("pausing game");
    	playerService.pauseGame();
    	$scope.gameRunning  = false;
    };

    $scope.resumeGame = function() {
    	console.log(("resuming game"));
    	playerService.startGame();
    	$scope.gameRunning = true;
    };

    //remove timer if view is destoryed
    $scope.$on('$destroy', function(e) {
    	console.log("destroying timeout");
        $timeout.cancel(playerService.getTimer());
	});

	$scope.jobClick = function() {
		playerService.getPlayer().cash += 1;
	};

	$scope.influenceClick = function() {
		playerService.getPlayer().influence += 1;
	};


}]);

mainModule.controller('MainMenuCtrl',["$scope", "buyService", "playerService", "mapService", "eventsService", 
	function ($scope, buyService, playerService, mapService, eventsService) {

	$scope.buyItems = buyService.getBuyItems();


	console.log("Buy Items!");
	console.log($scope.buyItems);

	//refactor this

	$scope.showCash = true;
	$scope.showInfluence = false;
	$scope.showEventMenu = false;

	$scope.openMenu = function(selected) {
		if(selected === "cash") {
			$scope.showCash = true;
			$scope.showInfluence = false;
			$scope.showEventMenu = false;
		} else if (selected === "influence") {
			$scope.showCash = false;
			$scope.showInfluence = true;
			$scope.showEventMenu = false;
		} else if (selected === "event") {
			$scope.showCash = false;
			$scope.showInfluence = false;
			$scope.showEventMenu = true;
		}	
	};

	$scope.buyItem = function(item) {

		if(item) {
			// check if player has enough cash
			if(playerService.canAffordToBuy(item.cost)) {

				//buy item 
				playerService.buyItem(item);

				//if item can only be purchased once hide
				if(item.avail) {
					item.avail = false;
				}

				mapService.addPlace(item.image);


			} else {
				//cant afford item 
			}
		}
		
	};

	$scope.nextEvents = playerService.getPlayer().nextEvents;

	$scope.eventOpen = function(event, index) {

		console.log("event opened");
		console.log(event);
		console.log(index);

		eventsService.currentEvent = event;
		eventsService.currentEventIndex = index;
		eventsService.showEvent = true;

		console.log(eventsService.showEvent);
		
	};
}]);

mainModule.controller('EventCtrl',["$scope", "eventsService", "playerService", 
	function ($scope, eventsService, playerService) {

	$scope.nextEvents = playerService.getPlayer().nextEvents;

	//event modal window details
	$scope.showEvent = eventsService.showEvent;
	$scope.event = eventsService.currentEvent;
	$scope.index = eventsService.currentEventIndex;

	//watch for changes from mainmenu eg user selects an event
	$scope.$watch(function () { return eventsService.showEvent }, function (newValue, oldValue) {
	    if (typeof newVal !== oldValue) {
	        $scope.showEvent = newValue;
	    }
	});
	$scope.$watch(function () { return eventsService.currentEvent }, function (newValue, oldValue) {
	    if (typeof newVal !== oldValue) {
	        $scope.event = newValue;
	    }
	});
	$scope.$watch(function () { return eventsService.currentEventIndex }, function (newValue, oldValue) {
	    if (typeof newVal !== oldValue) {
	        $scope.index = newValue;
	    }
	});

	$scope.eventClose = function() {
		eventsService.showEvent = false;

		//add modifiers
		playerService.processEvent($scope.event);

		//remove event from next events
		playerService.getPlayer().nextEvents.splice($scope.index, 1);


	};

}]);

