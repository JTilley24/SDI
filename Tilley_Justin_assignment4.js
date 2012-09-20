

var lib = function() {

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
		"phoneNumber" : phoneNumber
	
	};


};

var newLib = new lib()

console.log(newLib.phoneNumber("781-447-1773"))

