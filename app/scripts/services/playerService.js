'use strict';

var mainModule = angular.module("main");

mainModule.service("playerService", ["$timeout", "eventsService", "mapService", 
	function ($timeout, eventsService, mapService) {

		var _levels = [672,1760,4480,11680,30560,80000,209440,548320],
			_levelNames = ["Small Time Nobody", "Somebody", "Local Entrepreneur", "Business Man", "Major Business Man", "Tycoon", "Kind Of A BIG DEAL", "KingPin"],
			_policeLevels = [160,256,416,672,1088,1760,2720,4480,7200,11680,18880,30560,49440,80000,129440,209440,338880,548320,887200],

			_gameTimer = null,
			_turnDuration = 2000,

			_randomEventChance = 30, // 1 in 10

			_player = {
			    cash: 0,
				level: 0,
				levelName: "Small Time Nobody",
				influence: 0,
				influencePercent: 0,
				// policeLevel: 0,
				// police: 0,
				cashModifier: 0,
				policeModifier: 0,
				influenceModifier: 0,

				//cash and influence buildings
				ownedItems: [],

				//events to be shown Content retrieved from server
				nextEvents : [],
				//possible events pool. Content retrieved from server
				possibleEventsPool : eventsService.getEvents(0),

				turnClock : _turnDuration / 1000,
				turn: 0

			};


		return {

			//player specific

		    getPlayer: function() {
		    	return _player;
		    }, 

		    levelUp: function() {
		    	var currentLevel = _player.level,
		    	influencePoints = _player.influence,
		    	pointsForNextLevel = _levels[currentLevel];

		    	if(influencePoints > pointsForNextLevel) {
		    		
		    		//update level name
		    		if(currentLevel + 1 < _levelNames.length) {
		    			_player.levelName = _levelNames[currentLevel + 1];
		    		}

		    		_player.level += 1;
		    		

		    		//add new event to next events list
		    		// var event = eventsService.getEventByLevel(_player.level);
		    		// _player.nextEvents.push(event);.

		    		//update event pool
		    		_player.possibleEventsPool = 
		    			eventsService.getEvents(_player.level); 
				}


		    		

		    	//ensure pointsForLastLevel is a number 
		    	// if(currentLevel === 0) {
		    	// 	var pointsForLastLevel = 0;
		    	// } else {
		    	// 	var pointsForLastLevel = _levels[currentLevel - 1]
		    	// }

		    	
		    		// console.log(_player.nextEvents);

		    		//reset influencePercent
		    		// _player.influencePercent = 0;

		    		//grow influence
		    		// mapService.growInfluence();
		    	 // else {
		    		//increase influencPercent
		    		//percentage is calculated from the difference between the next level and last level 
		    		// var a = influencePoints - pointsForLastLevel,
		    		// 	b = pointsForNextLevel - pointsForLastLevel;
		    		// _player.influencePercent = 
		    		// 	(a / b) * 100;

		    	// }
		    },

		    // policeLevelUp: function() {
		    // 	var currentLevel = _player.policeLevel,
		    // 		points = _player.police;

		    // 	if(points > _policeLevels[currentLevel]) {
		    // 		_player.policeLevel += 1;

		    // 		//add new event to next events list
		    // 		var event = eventsService.getEventByPoliceLevel(_player.influence);
		    // 		// this.processEvent(event);
		    // 		_player.nextEvents.push(event);

		    // 		// console.log(_player.nextEvents);
		    // 	}
		    // },

		    canAffordToBuy: function(price) {
		    	if(_player.cash >= price) {
		    		return true
		    	}

		    	return false;
		    },

		    buyItem: function(item) {
		    	if(item) {
			    	// add item to player items
			    	_player.ownedItems.push(item.index);

					// reduce player cash
					_player.cash -= item.cost;

					// change player cash/influence modifier
					if(item.modifierType === "cash") {
						_player.cashModifier += item.modifier
					} else if(item.modifierType === "influence") {
						_player.influenceModifier += item.modifier
					}
					_player.cashModifier += item.modifier;
					_player.influenceModifier += item.modifier;

					if(item.policeModifier > 0) {
						_player.policeModifier += item.policeModifier
					}

					//add new events to possible events list
					// var events = eventsService.getEventByBusiness(item.id);
					// _player.possibleEventsPool.push.apply(_player.possibleEventsPool, events);

					//add one to owned amount andincrease cost
					item.owned += 1;
					item.cost = Math.round(item.cost + (item.cost / 4));
				}
		    },

		    processEvent: function(event) {
		    	if(event) {
		    		if(event.modifierType === "cash") {
		    			if(event.modifierFrequency === "oneTime") {
		    				// var modifier = Math.random() * (_player.cash * 0.9);
		    				// _player.cash += modifier;
		    				_player.cash += event.modifier;
		    			} else if(event.modifierFrequency === "continuous") {
		    				_player.cashModifier += event.modifier;
		    			}
		    		} else if(event.modifierType === "influence") {
		    			if(event.modifierFrequency === "oneTime") {
		    				_player.influence += event.modifier;
		    				// var modifier = Math.random() * (_player.influence * 0.9);
		    				// _player.influence += modifier;
		    			} else if(event.modifierFrequency === "continuous") {
		    				_player.influenceModifier += event.modifier;
		    			}
		    		}
		    	}
		    },

		    //Game specific

		    startGame: function() {
		    	var self = this;

		    	// timeout runs every second and adds one to turnClock. when turnClock reaches turnDuration
		    	// end turn

		    	console.log("starting game...");
			    _gameTimer = $timeout(function myFunction() {

		        // do something
		        if(_player.turnClock == 1 ) {
			     	//console.log("ending turn...");

			    	//add modifiers
			    	_player.cash += _player.cashModifier;
			    	_player.police += _player.policeModifier;
			    	_player.influence += _player.influenceModifier;

			    	//level ups
			    	self.levelUp();
			    	mapService.growInfluence(_player.influence);
			    	// self.policeLevelUp();

			    	//add event to next events  
			    	if(_player.hasOwnProperty("possibleEventsPool")) {

			    		if(_player.possibleEventsPool.length > 0) {

				    		var randomIndex = Math.floor(Math.random() * _player.possibleEventsPool.length),
					    		newEvent = _player.possibleEventsPool[randomIndex],
					    		randomEvent = Math.floor(Math.random() * _randomEventChance);
				    		
							if(randomEvent === 1) {
					    		// console.log("adding new event");
					    		_player.possibleEventsPool.splice(randomIndex, 1);
					    		// self.processEvent(newEvent);
					    		_player.nextEvents.push(newEvent);
					    	}
			    		}
			    	} else {
			    		console.log("no property possibleEventsPool");
			    	}
			    	

			    	//update clock
			    	_player.turn += 1;
			    	_player.turnClock = _turnDuration / 1000;
		    	}

			        _gameTimer = $timeout(myFunction, 1000);
			        _player.turnClock -= 1;

			    }, 1000);

		    },

		    pauseGame: function() {
		    	$timeout.cancel(_gameTimer);
		    },

		    getTimer: function() {
		    	return _gameTimer;
		    }


	};
}]);
