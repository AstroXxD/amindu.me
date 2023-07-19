$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//preloader
const preloaderWrapper = document.querySelector('.preloader-wrapper')
window.addEventListener('load', function(){
    preloaderWrapper.classList.add('fade-out-animation');
});