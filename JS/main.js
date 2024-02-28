// ********** toggle icon navbar **************** 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ********** Scroll section active links **************** 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    // ********** Sticky navigation bar ****************
    let header = document.querySelector('header');
    //if window.scroll y to position is > 100 (true), add 'class = sticky' to header
    // toggle is add or remove base on the following condition
    header.classList.toggle('sticky', window.scrollY > 100)

    // ********** remove toggle icon and navbar when click navbar links (scroll)**************** 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ********** Scroll reveal **************** 
ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ********** typed js **************** 
const typed = new Typed('.multiple-text', {
    strings: ['前端工程師｜設計師', '產品經理', '越南市場分析師'],
    typeSpeed: 100, //delaytime
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });

// ********** lightbox js **************** 
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fitImagesInViewport': true,
    'maxHeight': 500,
    'disableScrolling' : true,
  })