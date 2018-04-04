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
            default:
                button.addEventListener("click", numclick, false);

        }
    }

    var display = document.getElementById("display");
    var result = false;
    var clickres = false;



    function equals () {

        result = true;
        var value = display.innerHTML;
        var str = /(√(\d*))/g;
        var match = value.match(str);
        var index = value.search(str);//индекс первого элемента, с которого началось совпадение(√)
        var str_2 = /(\^(\d*))/g;
        var match_2 = value.match(str_2);
        var index_2 = value.search(str_2);
        var marker = "cfc";

        while (index != -1) {
            var argument = parseFloat(match[0].slice(1));//match[0]-знак и всё после знака,slice(1)-убираем знак
            var result = Math.sqrt(argument);
            var first_part = value.slice(0, index);//обрезка строки с начала до index-начала совпадения str
            var second_part =  value.slice(index + match[0].length);//value.slice(...)=slice(6)-чтобы иметь возможность считать последующие корни
            value = first_part;
            var prev_symb = value[index-1];
            if (prev_symb !== undefined) {//говорим, что 11√22=11*√22, проверяя есть ли что-то до корня(в нашем случае 11)
                var charcode = prev_symb.charCodeAt(0);//.charCodeAt-код символа в кодировке
                if (charcode > 47 && charcode < 58) {// если charcode = 1-9
                    value += '*';//добавление в конец first part * - 11*(√22)
                }

            }

            value += result;
            value += second_part;
            match = value.match(str);
            index = value.search(str);
        }

        }
        while(index_2 != -1) {
             var stepen = match_2[0].slice(1);
             var base = value.slice(0, index_2);
             var total = Math.pow(base, stepen);
             value += total;
             match_2 = value.match(str_2);
             index_2 = value.search(str_2);
             //marker = true;
         }

        alert(base);
        alert(stepen);

            try {
                value = eval(value);
            } catch (e) {
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



});






