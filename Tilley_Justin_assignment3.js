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

//function with mutator and while loop
var biketype = function (newBike) {
		bikes.brand.push(newBike)
		var	i = 0;
		while (i <= 4){ 
		var bike = bikes.brand[i]
		console.log(bike);
		i++
		};
		return newBike;
};

//outputs and accessor
console.log(name + " can choose from the following bikes:")

biketype("KTM ")

console.log(name + " picks the " + bikes.brand[1] + bikes.type + ".");
console.log ("It has a " + bikes.engineSize + "cc engine.");

bikes.stroke()

decide(true)




var bigJump = function() {
		var bigName = json2.jumps[1].name,
			bigSize = json2.jumps[1].size;
		bigHeight = bigSize - (json2.jumps.length);
		console.log(name + " hits the " + bigName + " jump and reaches a height of "
					 + bigHeight + " feet!" )
		return bigHeight;
				
		
};

//json
var handleData = function (json) {
		for(var i = 0; i < json.jumps.length; i++){
		var jump = json.jumps[i]
		console.log("The " + jump.name + " jump is " + jump.size + " feet long.")
		};
		
};

handleData(json2);


//object return
var bikeSpeed = function (bikeThrottle) {
		var getSpeed = function(){
			var speed = bikeThrottle * json2.jumps.length;
			return speed;
		};
		var getGear = function() {
			var gear = bikes.engineSize / 50;
			return gear;
		};
		
		return {
		"throttle": (bikeThrottle / 10),
		"speed": getSpeed,
		"gear": getGear
		};
};

var jumpSpeed = bikeSpeed(5)

console.log(name + " needs to be in " + jumpSpeed.gear() + "th gear to make the " + json2.jumps[1].name + " jump!")
console.log(name + " approaches the jump with " + jumpSpeed.throttle + " throttle at " + jumpSpeed.speed() + " mph.")
 
//array return
var totalJump = function(jumpHeight) {
		var totalHeight = json2.jumps[1].size + jumpHeight
			
		return [totalHeight, jumpHeight]
};

var totalJumpHeight = totalJump(bigJump())

console.log(name + " jumps for a total of " + totalJumpHeight[0] + " feet.")

//boolean return and conditional
var tire = function(tireSpin) {
		var tireImpact = tireSpin[1]
		if (tireImpact = true) {
			console.log(name + " begins to lose control of the bike.")
			if (tireSpin[0] > 5) {
				tireCatch = true
				console.log( "It is " + tireCatch + " that " + name + 
					" gains control of the bike again.");
			}
			else{
				console.log("The bike's tire spins out of control.")
				tireCatch = false
			}
		}
		else{
			console.log(name + " lands safely.")
		}
		return tireCatch;
};

tire([10, true])
