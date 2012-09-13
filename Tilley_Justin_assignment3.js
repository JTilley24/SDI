var name = "Mike"
var bike = {
	"brand": ["Yamaha ", 
			"Kawasaki ",
			"Honda ",
			"Suzuki "
	],
	"engineSize": 250,
	"type": "dirt bike",
	"stroke": {
	 "twoStroke": "two stroke",
	 "fourStroke": "four stroke"
	},
	
	

};


console.log(name + " has a " + bike.brand[1] + bike.type + ".");
console.log ("It has a " + bike.engineSize + "cc that is a " + bike.stroke.twoStroke + ".");
var handleData = function(json) {
		for(var i = 0; i < json.jumps.length; i++){
		var jump = json.jumps[i]
		console.log("The " + jump.name + " is " + jump.size + " feet.")
		};

};

handleData(json2);