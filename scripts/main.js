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
        result = true;
        try {
            var value = eval(display.innerHTML);
        } catch(e) {
            display.innerHTML = "ERROR!";
            return;
        }
        display.innerHTML = value;
    }

    function numclick () {

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
       var arr = display.innerHTML.slice(0, -1)
       display.innerHTML = arr

   }
});




