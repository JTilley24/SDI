//variables
var name = "Mike"
var mile = 1/2
var bikesStroke = true
//object
var bikes = {
	"brand": ["Yamaha ", 
			"Kawasaki ",
			"Honda ",
			"Suzuki "
	],
	"engineSize": 250,
	"type": "dirt bike",
	"stroke": function(bikesStroke) {
	 	if(bikesStroke = true) {
	 		console.log("The bike is a four stroke.")
	 	}
	 	else{
	 		console.log("The bike is a two stroke.")
	 	}
	}
};

//boolean function
var decide = function(jumpAttempt) {
	if (jumpAttempt && true) {
	console.log(name + " is going to attempt the jump!")
	}
	else {
	console.log(name + " is having second thoughts!")
	};
};



//outputs
console.log(name + " has a " + bikes.brand[1] + bikes.type + ".");
console.log ("It has a " + bikes.engineSize + "cc engine.");
bikes.stroke()
decide(true)


//mutator
var biketype = function (newBike) {
		bikes.brand.push(newBike)
		var	i = bikes.brand.length - 1
		while (i >= 0){ 
		var bike = bikes.brand[i];
		console.log(bike);
		i--
		return bike;
		};
		
};

biketype("KTM ");

//accessor
var bigJump = function() {
		var bigName = json2.jumps[1].name,
			bigSize = json2.jumps[1].size;
		bigHeight = bigSize - (json2.jumps.length);
		console.log(name + " hits the " + bigName + " jump and reaches a height of " + bigHeight + " feet!" )
		
};
bigJump();

//json
var handleData = function (json) {
		for(var i = 0; i < json.jumps.length; i++){
		var jump = json.jumps[i]
		console.log("The " + jump.name + " jump is " + jump.size + " feet long.")
		};
		
};

handleData(json2);

//object return

var bikeSpeed = function (throttle) {
		var getSpeed = function(){
			var speed = throttle * json2.jumps.length;
			return speed;
		};
		var getGear = function() {
			var gear = bikes.engineSize / 50;
			return gear;
		};
		
		return {
		"throttle": throttle,
		"speed": getSpeed,
		"gear": getGear
		};
};
var bigJumpspeed = bikeSpeed(5)
console.log(bigJumpspeed.gear())
