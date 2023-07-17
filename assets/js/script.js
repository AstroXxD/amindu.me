var typed = new Typed('.multitext', {
strings: ['Front-End Developer', 'FiveM Developer', 'Web Designer', 'Graphic Designer'],
loop: true,
typeSpeed: 100,
backSpeed: 80,
startDelay: 1000,
});

//navtoggle
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.toggle-dropdown')

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle('open-toggle')
const isOpen = dropDownMenu.classList.contains('open-toggle')

toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};

//preloader
const preloaderWrapper = document.querySelector('.preloader-wrapper')
window.addEventListener('load', function(){
    preloaderWrapper.classList.add('fade-out-animation');
});

//projects slider
$(".carousel").owlCarousel({
    margin: 60,
    loop: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0:{
            items:1,
            nav: false,
        },
        800:{
            items:2,
            nav: false
        },
        1200:{
            items:3,
            nav: false
        }
    }
});

//Services slider
$(".carousel-2").owlCarousel({
    margin: 0,
    loop: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0:{
            items:1,
            nav: false,
        },
        800:{
            items:2,
            nav: false
        },
        1200:{
            items:4,
            nav: false
        }
    }
});