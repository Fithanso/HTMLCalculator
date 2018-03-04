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
    var square = false;


    function equals () {
        result = true;
        if (square = true) {
            var value = display.innerHTML;
            var str = /((\d*)√(\d*))/g;
            var match = value.match(str);
            alert(match[2]);
        }

        try {
            var value = eval(display.innerHTML);
        } catch(e) {
            display.innerHTML = "ERROR!";
            return;
        }
        display.innerHTML = value;
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
        var arr = display.innerHTML.slice(0, -1)
        display.innerHTML = arr

    }

    function sqrt () {
        if (result == true) {
            result = false;
            display.innerHTML = ""
        }
        display.innerHTML+=this.innerHTML;
        clickres = true;
        square = true;

    }
});






