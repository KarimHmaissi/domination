'use strict';

var mainModule = angular.module("main");

mainModule.service("buyService", [function () {

	var _buyItems = [{
		id: 0,
		owned: 0,
		title: "Meth Lab",
		image: "images/drugs.png",
		legal: false,
		cost: 17,
		policeModifier: 1,
		modifierType: "cash",
		modifier: 0.5,
		description: "Bookies are a reliable means of benefiting from humanities irrational hope."
	},{
		id: 1,
		owned: 0,
		title: "Fast Food Resturant",
		image: "images/resturant.png",
		legal: true,
		cost: 175,
		policeModifier: 0,
		modifierType: "cash",
		modifier: 2,
		description: "Bank are extremley useful and awesome investment"
	},{
		id: 2,
		owned: 0,
		title: "Casino",
		image: "images/casino.png",
		legal: false,
		cost: 500,
		policeModifier: 2,
		modifierType: "cash",
		modifier: 5,
		description: "Say my name, YOUR GOD DAMN RIGHT"
	},{
		id: 3,
		owned: 0,
		title: "Supermarket Chain",
		image: "images/market.png",
		legal: true,
		cost: 3000,
		policeModifier: 0,
		modifierType: "cash",
		modifier: 24,
		description: "More cats more money"
	},{
		id: 4,
		owned: 0,
		title: "Major Bank",
		image: "images/bank.png",
		legal: true,
		cost: 10000,
		policeModifier: 0,
		modifierType: "cash",
		modifier: 172,
		description: "More cats more money"
	},{
		id: 3,
		owned: 0,
		title: "Major Investment Bank",
		image: "images/investmentBank.png",
		legal: true,
		cost: 40000,
		policeModifier: 0,
		modifierType: "cash",
		modifier: 300,
		description: "More cats more money"
	},{
		id: 5,
		owned: 0,
		title: "Oil Empire",
		image: "images/oil.png",
		legal: true,
		cost: 200000,
		policeModifier: 0,
		modifierType: "cash",
		modifier: 900,
		description: "More cats more money"
	},{
		id: 6,
		owned: 0,
		title: "International Corporate Empire",
		image: "images/empire.png",
		legal: true,
		cost: 1666000,
		policeModifier: 0,
		modifierType: "cash",
		modifier: 7000,
		description: "More cats more money"
	},
	//influence
	{
		id: 7,
		owned: 0,
		title: "NewsPaper Story",
		image: "images/newspaper.png",
		legal: true,
		cost: 10000,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 200,
		description: "POWER POWER POWER",
		avail: true
	},{
		id: 8,
		owned: 0,
		title: "Local Council Elections",
		image: "images/localElections.png",
		legal: true,
		cost: 175000,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 3500,
		description: "POWER POWER POWER",
		avail: true
	},,{
		id: 9,
		owned: 0,
		title: "Local State Elections",
		image: "images/stateElections.png",
		legal: true,
		cost: 500000,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 6000,
		description: "POWER POWER POWER",
		avail: true
	},{
		id: 10,
		owned: 0,
		title: "National Elections",
		image: "images/national.png",
		legal: true,
		cost: 1000000,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 15000,
		description: "POWER POWER POWER",
		avail: true
	},{
		id: 11,
		owned: 0,
		title: "King",
		image: "images/king.png",
		legal: true,
		cost: 5000000,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 100000,
		description: "POWER POWER POWER",
		avail: true
	},{
		id: 12,
		owned: 0,
		title: "Emperer",
		image: "images/emp.png",
		legal: true,
		cost: 10000000,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 300000,
		description: "POWER POWER POWER",
		avail: true
	},{
		id: 13,
		owned: 0,
		title: "Nuclear Warlord",
		image: "images/warLord.png",
		legal: true,
		cost: 100000000,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 5000000,
		description: "More cats more money",
		avail: true
	},{
		id: 14,
		owned: 0,
		title: "Complete Global Domination",
		image: "images/global.png",
		legal: true,
		cost: 999999999,
		policeModifier: 0,
		modifierType: "influence",
		modifier: 12000000,
		description: "More cats more money",
		avail: true
	}];


	return {
		getBuyItems: function() {
			return _buyItems;
		},

		getBuyItem: function(index) {
			return _buyItems[index];
		}
	};
}]);
