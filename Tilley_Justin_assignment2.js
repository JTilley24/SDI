//variables
var name = "Mike";
var jumpName = ["small", "big", "double", "triple"];
var mile = 1/2;

//procedure

var decide = function(attempt) {
	var attempt
	if (attempt = true) {
	console.log(name + " is going to attempt the jump!")
	}
	else {
	console.log(name + " is having second thoughts!")
	};

};

var jumpAttempt = decide(true); 

console.log("It is a " + mile + " mile stretch before the jump!");

//string

var thought = function(will, reason) {
	var will,
		reason;
		
	var innerThought = name + reason + '"You ' + will + " do this, " + name + '"';
	
	return innerThought;
};

var thoughtString = thought("can", " thinks ");

console.log(thoughtString);

//number

var gear = function(throttle) {
		var speed;
		var jumpSpeed = throttle - jumpName.length;
		while(jumpSpeed > 0) { 
		console.log(name + " can make the jump!");	jumpSpeed--
		};
		speed = throttle * jumpName.length;
		return speed;
};

var bikeSpeed = gear(5);

//array

var jump = function(jumpNumber, size) {
	var jumpNumber,
		size;
	var feet = [5, 10, 15,];
	for (jumpHeight= 0; jumpHeight < feet.length; jumpHeight++) {
		console.log(name + " hits the " + jumpName[jumpNumber] + " jump and goes " + 
			feet[jumpHeight] + size[1]);
		};
	var height = (jumpNumber * 5)+ feet[jumpNumber];
	return [height + size[1]];
	
};

var jumpSize = jump(1, ['"', "'"]);

console.log(name + " jumped for a maximum of " + jumpSize);

console.log(name + " makes the jump at " + bikeSpeed + " mph!");

console.log(name + " begins to lose control of the bike.");

//boolean

var tire = function(tireSpin, tireCatch) {
			var tireWipeout = false,
				tireImpact; 
			if ((tireSpin && tireCatch) || !tireWipeout) {
				tireImpact = true
			}
			else {
				tireImpact = false
			};
			return tireImpact;
};

var tireStatus = tire(true, true);

console.log( "It is " + tireStatus + " that " + name + 
			" gains control of the bike again.");