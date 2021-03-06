//Justin Tilley
//SDI Term 1209
//Project 4 

var lib = function() {
	
	//Sort array of object by key function
	var sort = function(array,key) {
		return array.sort(
			function(a, b) {
				return a[key]-b[key];
			}
		);
	};
	
	//Sum of numbers array function
	var sum = function(array) {
		var total = 0
		var val;
		for(var i = 0; i < array.length; i++) {
			v = parseFloat(array[i])
			if(!isNaN(v)) {
				total += v

			};		
		};
		return total;
	};
	
	//Small Value array function
	var small = function(array,val) {
		var min = array.sort()
		minValue = min[0]
		for(var i = 0; i < min.length; i++) {
			if(min[i] > minValue && min[i] > val) {
				return minValue = min[i];
			}
		}
	};
	
	
	//Return Value number function
	var number = function (val) {
		return parseInt(val);
	};
	
	
	//Dates number function
	var date = function (firstDate,secondDate) {	
		var firstdate = new Date(firstDate)
		var seconddate = new Date(secondDate) 
		var diff = seconddate.getTime() - firstdate.getTime()
		var hours = Math.floor(diff/(1000*60*60))
		var days = Math.floor(hours/24)
		return {
			"hours" : hours,
			"days" : days
		};
	
	
	};
	
	
	//Fuzzy-match number function
	var fuzzy = function (number,match,percent) {
		var perc = (percent/100)
		if(number <= ((match * perc)+match)) {
			if(number >= (match - (match * perc))) {
				return true;
			} else {
				return false;
			}	
		} else {
			return false;
		}
	
	};
	
	//Number decimal function
	var money = function(val) {
		return val.toFixed(2);
	};
	
	
	//String separator function
	var separate = function (val,separator) {
		var separated = val.charAt(1)
		var sep = new RegExp(separated,"g")
		return val.replace(sep, separator);
	};
	
	
	//Title-case string function
	var title = function(val) {
		var split = val.indexOf(" ")
		upperFirst = val.charAt(0).toUpperCase() + val.substring(1,split)
		upperSecond = val.charAt(split+1).toUpperCase() + val.substring((split+2),val.lenth)
		return upperFirst + " " + upperSecond;
		
	};
	
	
	//URL string function
	var url = function(val) {
		var domain = val.substring(0,val.indexOf(":"));
		if((domain == "http") || (domain  == "https")) {
			return true;
		} else {
			return false;
		};
	};
	
	
	//Email Address string function
	var email = function(val) {
	 	var at = val.indexOf("@")
		var dot = val.indexOf(".")
		if(val.charAt(at) == "@") {
			if(val.substring(dot,val.length).length - 1 == 3){
				return true;
			} else {
				return false;
			};
	
		} else {
			return false;
		};
	};
	
	
	// Phone-Number string function
	var phoneNumber = function (val) {
		if(val.length == 12){
			if(val.charAt(3) && val.charAt(7) == "-") {
				if(isNaN(val.substring(0,2) || val.substring(4,6) || val.substring(8,12))) {
					return false
				} else {
					return true
				};
			} else {
				return false
			};
		} else {
		 return false
		};
	};
	
	return {
		"phoneNumber" : phoneNumber,
		"email" : email,
		"url" : url,
		"title" : title,
		"separate" : separate,
		"money" : money,
		"fuzzy" : fuzzy,
		"date" : date,
		"number" : number,
		"small" : small,
		"sum" : sum,
		"sort" : sort
	};


};

var newLib = new lib()

//Outputs
console.log("The phone number is " + newLib.phoneNumber("781-447-1773"))

console.log("The email address is " + newLib.email("prankster@yahoo.com"))

console.log("The web url is " + newLib.url("http://www.google.com/"))

console.log(newLib.title("justin tilley" + " is capitalized."))

console.log(newLib.separate("a,b,c","/"))

console.log("You have $" + newLib.money(2.4))

console.log("The numbers matching within the percent is " + newLib.fuzzy(2.4,2,20))

var newDate = newLib.date("June 20,1989 00:01:00","November 8,2011 04:15:00")

console.log("Day : " + newDate.days + " Hours : " + newDate.hours)

console.log("The number is " + newLib.number("42"))

console.log(newLib.small([5,1,8,3],2) + " is the smallest value that is greater than 2.")

console.log("The sum of the array is " + newLib.sum([2,6,9,2,"a",7]))

console.log(newLib.sort([{a:2},{a:7},{a:5}],"a"))

