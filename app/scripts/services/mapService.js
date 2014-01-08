'use strict';

var mainModule = angular.module("main");

mainModule.service("mapService", function () {

	var _markers = [],

		_initMapOptions = {
		  center: new google.maps.LatLng(52.4831, -1.8936),
		  zoom: 16,
		  mapTypeId: google.maps.MapTypeId.ROADMAP  
		},

		_homeLocation = null,

		_geoCoder = new google.maps.Geocoder(),

		_influenceCircleSettings = null,

	 	_influenceCircle = null,

	 	_map = null;

	return {

		initMap: function(map) {
			//setup _influenceCirlceSettings
			//		_homeLocation

			_map = map;
		},

		getInitMapOptions: function() {
			return _initMapOptions;
		},

		initInfluenceCircle: function(settings) {
			_influenceCircleSettings = settings;

			// Add the circle for this city to the map.
			_influenceCircle = new google.maps.Circle(_influenceCircleSettings);
		},	

		growInfluence: function(influence) {
			// console.log("growing influence");

			var currentRadius = _influenceCircle.getRadius(),
				newRadius = 0;

			// newRadius = (currentRadius + (currentRadius * 0.1));
			if(influence > 30) {
				newRadius = influence / 50;
			}

			newRadius += 100;
			
			_influenceCircle.setRadius(newRadius);

		},

		getGeocoder: function() {
			return _geoCoder;
		},

		addPlace: function(imageUrl) {

			var self = this;

			new google.maps.Marker({
		    	map: _map,
		    	position: self.getMarkerNextPosition(),
		    	animation: google.maps.Animation.DROP,
		    	icon: imageUrl
		  	});

		},

		getMarkerNextPosition: function() {
			//get next markers position from incremintally increasing lat/long
			//test if markers position is within radius of home
			// var newPosition = new google.maps.LatLng(_initMapOptions.center.lat() + _markerIndex.lat, 
			// 	_initMapOptions.center.lng() + _markerIndex.lng);

			// var newPosition = new google.maps.LatLng(_initMapOptions.center.lat() + 0.0003, 
			// 	_initMapOptions.center.lng() + 0.0003);
			console.log("ADDING MARKER! item Brought");

			// _markerIndex.lat += 0.0003;
			// _markerIndex.lng += 0.0003;

			//get bounds of influence circle 
			var bounds = _influenceCircle.getBounds();

				if(bounds) {
					if(!bounds.isEmpty()) {
						var neLatLng = bounds.getNorthEast(),
							swLatLng = bounds.getSouthWest(),

							//get difference in bounds
							latitudeDiff = neLatLng.lat() - swLatLng.lat(),
							longitudeDiff = neLatLng.lng() - swLatLng.lng(),

							//set new location to be random location within the bounds
							newLatiude = swLatLng.lat() + (Math.random() * latitudeDiff),
							newLongitude = swLatLng.lng() + (Math.random() * longitudeDiff);

							console.log(newLatiude);
							console.log(latitudeDiff);

							console.log("new lat: " + newLatiude);
							console.log("new lng: " + newLongitude);
							return new google.maps.LatLng(newLatiude, newLongitude);
					} else {
						consol.log("bounds is empty");
					}
				} else {
					console.log("cannot find bounds");
				}
				





			return newPosition;


		},

		addMarker: function(marker) {
			
			console.log(marker);
			_markers.push(marker);
			console.log(_markers);
		},

		getMarkers: function() {
			return _markers; 
		}


	};
});
