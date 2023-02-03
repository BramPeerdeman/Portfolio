// close the div in 5 secs
window.setTimeout("closeHelpDiv();", 2000);

function closeHelpDiv() {
    document.getElementById("cover").style.display = " none";
}


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth
    }
});


// navigation starts here
$("#toggle").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
$("#resize ul li a").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
$(".close-btn").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
// navigation ends here
// nav animation
TweenMax.from("#brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);
// nav animation ends
new WOW().init();


const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");

window.onload = function () {
    setTimeout(function () {
        word1.classList.add("visible");
    }, 1000);
    setTimeout(function () {
        word2.classList.add("visible");
    }, 1500);
};





function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {

    sliderImages.forEach(sliderImage => {
        //--halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2;

        //-- bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');

        }
    })
}


window.addEventListener('scroll', debounce(checkSlide));





