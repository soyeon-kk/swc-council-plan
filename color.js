var Body = {
    setColor : function(color) {
        // document.querySelector('body').style.color = color;
        $('Body').css('color', color); // 위 코드를 jQuery를 통해 간단히 한 것임.
    },
    setBackgroundColor : function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('Body').css('backgroundColor', color); // 위 코드를 jQuery를 통해 간단히 한 것임.
    }
}
var Links = {
    setColor : function(color) {
        /*
        var grays_1 = document.querySelectorAll('.c1');
        var i = 0;
        while(i < grays_1.length) {
            grays_1[i].style.color = color;
            i = i + 1;
        }
        */
       $('c1').css('color', color); // 위 코드를 jQuery를 통해 간단히 한 것임.
    }
}
function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        document.querySelector('#head').style.color = 'white';
        if (document.getElementById("selected")) {
            document.querySelector('#selected').style.color = 'white';
        }
        self.value = 'day';
        Links.setColor('gray');
    } 
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        document.querySelector('#head').style.color = 'black';
        if (document.getElementById("selected")) {
            document.querySelector('#selected').style.color = 'black';
        }
        self.value = 'night';
        Links.setColor('#383737');
    }
}