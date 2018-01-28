require([], function () {
    var a = document.getElementById('add');
    var b = document.getElementById('minus');
    var c = document.getElementById('multi');
    var d = document.getElementById('break');
    var e = document.getElementById('super');
    var i = document.getElementById('summ');

    a.onclick = function() {
    	
        var first = parseInt(prompt("Первое слагаемое"));
        var second = parseInt(prompt("Второе слагаемое"));
        var total = first + second;
        i.innerHTML = total;
    }

    b.onclick = function() {
    
    	var first = parseInt(prompt("Из чего вычитаем"));
        var second = parseInt(prompt("Что вычитаем"));
        var total = first - second;
        i.innerHTML = total;
    }

        c.onclick = function() {
       
    	var first = parseInt(prompt("Что умножаем"));
        var second = parseInt(prompt("На что умножаем"));
        var total = first * second;
        i.innerHTML = total;
    }

        d.onclick = function() {
        
    	var first = parseInt(prompt("Что делим"));
        var second = parseInt(prompt("На что делим"));
        var total = first / second;
        i.innerHTML = total;
    }

        e.onclick = function() {
        
    	var first = parseInt(prompt("Основание"));
        var second = parseInt(prompt("Степень"));
        var total = Math.pow(first, second);
        i.innerHTML = total;
    }
    
});



