var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');

let currentslide = 1;

var manualnav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualnav(i);
        currentslide = i;
    });
});

var repeat = function(activeclass){
    let active = document.getElementsByClassName('active');
    let i = 1;


    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeslide) => {
                activeslide.classList.remove('active');2
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length == i){
                i = 0;

            }
            if(i>= slides.length){
                return;
            }
            repeater();
            
        }, 5000);
        
    }
    repeater();
}
repeat();