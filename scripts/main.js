require([], function () {

    var buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length; i++) {
        var button = buttons[i];

        switch (button.innerHTML) {
            case ("="):
                button.addEventListener("click", equals, false);
                break;
            case ("R"):
                button.addEventListener("click", clear_one, false);
                break;
            case ("Clear"):
                button.addEventListener("click", clear, false);
                break;
            case ("√"):
                button.addEventListener("click", sqrt, false);
                break;
            default:
                button.addEventListener("click", numclick, false);

        }

    }
    var display = document.getElementById("display");
    var result = false;
    var clickres = false;
    var error_clear;
    var square = false;


    function equals () {
        result = true;

        try {
            if(square = true) {
                var arr_2 = display.innerHTML.slice(1);//в массив заносится всё, не включая знак кв корня
                alert(arr_2);
            }
            var value = eval(display.innerHTML);
        } catch(e) {
            display.innerHTML = "ERROR!";
            error_clear = true;
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
           display.innerHTML = " ";
       }
   }

   function clear_one () {
            var arr = display.innerHTML.slice(0, -1)
            display.innerHTML = arr;
   }

   function sqrt () {
       display.innerHTML+=this.innerHTML;
       clickres = true;
       square = true;
   }

});




