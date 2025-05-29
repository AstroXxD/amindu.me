//preloader
const preloaderWrapper = document.querySelector('.preloader-wrapper')
window.addEventListener('load', function(){
    preloaderWrapper.classList.add('fade-out-animation');
});

//Navbar
const navEl = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled')
    }
    else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled')
    }
});

//Nav active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


// Hero text
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
        500:{
            items:2,
            nav: false
        },
        800:{
            items:3,
            nav: false
        },
        1200:{
            items:4,
            nav: false
        }
    }
});

//Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//age

const birthDate = new Date('1999-08-24');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed = (today.getMonth() > birthDate.getMonth()) || 
                             (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassed) {
    age--;
  }
  document.getElementById('age').textContent = age;