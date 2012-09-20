

var lib = function() {
	
	
	
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
		"url" : url
	};


};

var newLib = new lib()

//console.log(newLib.phoneNumber("781-447-1773"))

//console.log(newLib.email("prankster@yahoo.com"))

//console.log(newLib.url("http://www.google.com/"))

