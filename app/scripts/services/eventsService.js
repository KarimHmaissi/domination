'use strict';

var mainModule = angular.module("main");

mainModule.service("eventsService", [function () {

	var _events = [{

	}, {

	}, {

	}, {

	}];

		


	return {


		//current shown event
		currentEvent: null,

		//display event modal window?
		showEvent: false,

		currentEventIndex: 0,

		events: [[
			{
				title: "Small time nobody",
				message: "Your friend loans you some cash",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 100)
			},
			{
				title: "Small time nobody",
				message: "You have a friend interning at a local newspaper. He has managed to feature you in a page 12 story",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: Math.floor(Math.random() * 100)
			},
			{
				title: "Small time nobody",
				message: "You left your wallet in a cab you muppet.",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: -(Math.floor(Math.random() * 100))
			},
			{
				title: "Small time nobody",
				message: "$20 on the lottery!",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: 20
			},
			{
				title: "Small time nobody",
				message: "Sold your tv.",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 250)
			}
		],
		[
			{
				title: "Somebody",
				message: "Tax rebate!",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 400)
			},
			{
				title: "Somebody",
				message: "A local gang has smashed up some of your property.",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: -(Math.floor(Math.random() * 300))
			},
			{
				title: "Somebody",
				message: "You need a new car.",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 2000)
			},
			{
				title: "Somebody",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 500))
			},
			{
				title: "Somebody",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: Math.floor(Math.random() * 500)
			}
		],[
			{
				title: "level 2",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 1000)
			},
			{
				title: "level 2",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 500)
			},
			{
				title: "level 2",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 800))
			},
			{
				title: "level 2",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: (Math.floor(Math.random() * 800))
			},
		],[
			{
				title: "level 3",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 2500)
			},
			{
				title: "level 3",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 3000)
			},
			{
				title: "level 3",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: -(Math.floor(Math.random() * 1000))
			},
			{
				title: "level 3",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 1500)
			},
			{
				title: "level 3",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: Math.floor(Math.random() * 800)
			},
			{
				title: "level 3",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 5000))
			}
		],[
			{
				title: "level 4",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 8000)
			},
			{
				title: "level 4",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 2000)
			},
			{
				title: "level 4",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 4000)
			},
			{
				title: "level 4",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 5000))
			},
			{
				title: "level 4",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: Math.floor(Math.random() * 6000)
			}
		],[
			{
				title: "level 5",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 20000)
			},
			{
				title: "level 5",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: -(Math.floor(Math.random() * 15000))
			},
			{
				title: "level 5",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 18000)
			},
			{
				title: "level 5",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: Math.floor(Math.random() * 6000)
			},
			{
				title: "level 5",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 20000))
			}
		],[
			{
				title: "level 6",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 50000)
			},
			{
				title: "level 6",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: -(Math.floor(Math.random() * 75000))
			},
			{
				title: "level 6",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 100000)
			},
			{
				title: "level 6",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 100000))
			},
			{
				title: "level 6",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: Math.floor(Math.random() * 100000)
			},
		],[
			{
				title: "level 7",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: -(Math.floor(Math.random() * 200000))
			},
			{
				title: "level 7",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 150000)
			},
			{
				title: "level 7",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "cash",
				modifier: Math.floor(Math.random() * 250000)
			},
			{
				title: "level 7",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 200000))
			},
			{
				title: "level 7",
				message: "",
				modifierFrequency: "oneTime", 
				modifierType: "influence",
				modifier: -(Math.floor(Math.random() * 200000))
			},
		]],

		getEvents: function(level) {
			//api/event#level#
			if(level < this.events.length) {
				return this.events[level];	
			} else {
				return [];
			}

		},

		// getGenericEvents: function() {
		// 	//api/events/generic

		// 	return [{title: "generic event 1",
		// 			message: "Your friend daves loans you some cash",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 2",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "influence",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 3",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 4",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "influence",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 1",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 2",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "influence",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 3",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 4",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "influence",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 1",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 2",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "influence",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 3",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: Math.floor(Math.random() * 5000)},
		// 			{title: "generic event 4",
		// 			message: "",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "influence",
		// 			modifier: Math.floor(Math.random() * 5000)}];
		// },

		// getEvent: function(index) {
		// 	//api/events/id
		// },

		// getEvents: function() {
		// 	//api/events
		// },

		// getEventByBusiness: function(businessIndex) {
		// 	//api/events/businesses/id
		// 	return {title: "business",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: 100}
		// },

		// getEventByLevel: function(level) {
		// 	return {title: "You have levelled up! " + level,
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "cash",
		// 			modifier: 100}
		// },

		// getEventByPoliceLevel: function(influence) {
		// 	return {title: "police level",
		// 			modifierFrequency: "oneTime", 
		// 			modifierType: "influence",
		// 			//random percentage of influence lost
		// 			modifier: -(influence * (Math.random() * 0.9)) }
		// }

	};
}]);
