let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let servicesContainer = document.querySelector('.services-container');
let portfolioContainer = document.querySelector('.portfolio-container');
let navLinks ;
let homeContent = document.querySelector('.home-content .changetext');
let aboutContent = document.querySelector('.about-content');
let certContainer = document.querySelector('.cert_container');
let sections = document.querySelectorAll('section');
let langOption = document.querySelector('#langNum');
const typedtext = [['前端工程師', '設計師', '產品經理', '越南市場分析師'],['Developer', 'Designer', 'Product Manager', 'VN Market Analyst']]
let langNum = 1;

// ********** lightbox js **************** 
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fitImagesInViewport': true,
    'maxHeight': 500,
    'disableScrolling' : true,
});

render();


function render(){
    axios.get("../index.json").then(function(res){
        let navdata = res.data;
        renderNav(navdata);
        renderHome(navdata);
        renderSkill(navdata);
        renderPortfolio(navdata);
        renderAbout(navdata);
        renderCert(navdata);
        navLinks = document.querySelectorAll('.navbar li a');
        langOption = document.querySelector('#langNum');
        typeAsA(langNum);

    });
    //讀取 =》 組合菜單HTML
    function renderNav(navdata){
        let str = '';
        navdata.navbarMenu.forEach(function(item){
            let key = Object.keys(item);//Key as ID of the section
            str = str + `<li><a href="#${key}" class="">${item[key][langNum]}</a></li>`
        });
        navbar.innerHTML =  str;
    };
    function renderHome(navdata){
        homeContent.innerHTML = `<h3>${navdata.homeContent.hello[langNum]}</h3>
        <h2>${navdata.homeContent.myName[langNum]}</h2><h3>${navdata.homeContent.Im[langNum]} <span class="multiple-text"></span></h3>`
    };
    function renderSkill(navdata){
        let skillTitle = document.querySelector('.services .heading');
        skillTitle.innerHTML = navdata.skillContent.title[langNum];
        let str = '';
        navdata.skillContent.boxItems.forEach(function(item){
            str = str + `<div class="services-box">
            ${item.icon[langNum]}
            <h3>${item.h3[langNum]}</h3>
            ${item.description[langNum]}
        </div>`
        });
        servicesContainer.innerHTML = str
    }
    function renderPortfolio(navdata){
        let portfolioTitle = document.querySelector('.portfolio .heading');
        portfolioTitle.innerHTML = navdata.portfolioContent.title[langNum];
        let str = '';
        navdata.portfolioContent.boxItems.forEach(function(item){
            str = str + `<div class="portfolio-box"><img src="${item.img[langNum]}" alt="${item.h4[langNum]}"><div class="portfolio-layer"><h4>${item.h4[langNum]}</h4>${item.description[langNum]}</div></div>`
        });
        portfolioContainer.innerHTML = str
    }
    function renderAbout(navdata){
        aboutContent.innerHTML = `<h2 class="heading">${navdata.abouteContent.title[langNum]}</h2>${navdata.abouteContent.description[langNum]} `
    };
    function renderCert(navdata){
        let certTitle = document.querySelector('.certification .heading');
        certTitle.innerHTML = navdata.certContent.title[langNum];
        let str = '';
        navdata.certContent.boxItems.forEach(function(item){
            str = str + ` <a class="cert_box" href="${item.imgLage[langNum]}" data-lightbox="certBox" data-title="${item.title[langNum]}">
            <img src="${item.thumbnail[langNum]}" alt="${item.title[langNum]}">
        </a>`
        });
        certContainer.innerHTML = str
    }


};

langOption.addEventListener("change", (e)=>{
    console.log(e.target.value)
    langNum = e.target.value
    render();
});


// ********** toggle icon navbar **************** 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ********** Scroll section active links **************** 





window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar li a[href*=' + id + ']').classList.add('active')
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
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal(' .services-container, .portfolio-box, .contact form, .cert_box', { origin: 'bottom' });
    ScrollReveal().reveal('.home-img, .home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ********** typed js **************** 
function typeAsA (langNum) {
    let typed = new Typed('.multiple-text', {
        strings: typedtext[langNum],
        typeSpeed: 100, //delaytime
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });
}

