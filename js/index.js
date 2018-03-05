setTimeout(function(){
        $(".element0").typed({
            strings: ['C', 'o', 'm', 'e'],
            typeSpeed: 50, // typing speed
            backDelay: 1550, // pause before backspacing
            loop: true, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);
