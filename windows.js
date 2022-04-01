const box = document.querySelector('.box');
const message = document.querySelector('#message');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');
const img6 = document.querySelector('#img6');

var lastScrollTop = 0;

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {

    var st = window.pageYOffset || document.documentElement.scrollTop; 

    if(isInViewport(box)) {
        if (st > lastScrollTop) {
            if(scrollY > 290 && scrollY < 330) {
                fadeOut(img1);
                fadeIn(img2, "block");
            } else if (scrollY > 330 && scrollY < 370) {
                fadeOut(img2);
                fadeIn(img3, "block");
            } else if (scrollY > 370 && scrollY < 420) {
                fadeOut(img3);
                fadeIn(img4, "block");
            } else if (scrollY > 420 && scrollY < 455) {
                fadeOut(img4);
                fadeIn(img5, "block");
            } else if (scrollY > 455 && scrollY < 495) {
                fadeOut(img5);
                fadeIn(img6, "block");
            }
        } else {
            if(scrollY > 290 && scrollY < 330) {
                fadeOut(img2);
                fadeIn(img1, "block");
            } else if (scrollY > 330 && scrollY < 370) {
                fadeOut(img3);
                fadeIn(img2, "block");
            } else if (scrollY > 370 && scrollY < 420) {
                fadeOut(img4);
                fadeIn(img3, "block");
            } else if (scrollY > 420 && scrollY < 455) {
                fadeOut(img5);
                fadeIn(img4, "block");
            } else if (scrollY > 455 && scrollY < 495) {
                fadeOut(img6);
                fadeIn(img5, "block");
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; 
    }
    console.log(scrollY);
});

// FADE OUT FUNCTION
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

// FADE IN FUNCTION 
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
             el.style.opacity = val;
            requestAnimationFrame(fade);
         }
    })();
};
