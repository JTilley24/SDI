

var lib = function() {
	
	
	//Number decimal function
	var money = function(val) {
		return val.toFixed(2);
	};
	
	//String separator function
	var separate = function (val) {
		return val.replace(/,/g, "/");
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
		"money" : money
	};


};

var newLib = new lib()

//console.log(newLib.phoneNumber("781-447-1773"))

//console.log(newLib.email("prankster@yahoo.com"))

//console.log(newLib.url("http://www.google.com/"))

//console.log(newLib.title("justin tilley"))

//console.log(newLib.separate("a,b,c"))

//console.log(newLib.money(2.4))

