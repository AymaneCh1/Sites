 var interval = setInterval(function() {
        $('#number').text(number);
        if (number >= target) clearInterval(interval);
        number++;
    }, 30);