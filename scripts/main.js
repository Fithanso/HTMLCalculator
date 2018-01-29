require([], function () {

    var buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length; i++) {
        var button = buttons[i];
        if (button.innerHTML == "=") {
            button.addEventListener("click", equals, false);
        }else if(button.innerHTML == "Clear") {
            button.addEventListener("click", clear, false);
        }else if(button.innerHTML == "R") {
            button.addEventListener("click", clear_one, false);
        }else{
            button.addEventListener("click", numclick, false);
        }
    }
    var display = document.getElementById("display");
    var result = false;
    var clickres = false;


    function equals () {
        var value = eval(display.innerHTML);
        display.innerHTML = value;
        result = true;
    }

    function numclick () {

        if (result == true) {
            result = false;
            display.innerHTML = ""
        }
        display.innerHTML+=this.innerHTML;
        clickres = true;
    }

   function clear () {
       if(clickres == true) {
           clickres = false;
           display.innerHTML = " "
       }
   }

   function clear_one () {
       var arr = [display.innerHTML];
       arr.pop();/*не работает как надо*/
   }
});



