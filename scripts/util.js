"use strict"
define("util", [], function() {
    function abyss(a, b) {
	var answer = parseInt(a) + parseInt(b);
	return answer;
    }
    
    function myAlert() {
        var name = alert("Hello world!")
        return name;
    }
    
    return {
        myAlert: myAlert,
        abyss: abyss
    };
});
