
(function(){
    
    window.toggleMenu = toggleMenu;
    
    // Adjusting menu for mobile devices
    if (window.innerWidth < 875) {
        let navList = document.querySelector('.nav-list.active')
        let menuIconElems = document.querySelectorAll('.menu-icon-elem');
        
        navList.style.display = "none";
        menuIconElems.forEach(function(self) {
            self.style.transitionDuration = '0s';
        })
        navList.classList.remove('active');
        setTimeout(function() {
            navList.style.display = "flex";
            menuIconElems.forEach(function(self) {
                self.style.transitionDuration = '.5s';
            })
        }, 300)
        
    }

    if (window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith('/')) {
        indexPage();
    } else if (window.location.pathname.endsWith("resume.html")) {
        resumePage();
    } else if (window.location.pathname.endsWith("projects.html")) {
        projectsPage();
    } else if (window.location.pathname.endsWith("contact.html")) {
        contactPage();
    }
    
})()


function indexPage() {
    
    // // Moving programming language icons
    // let transform;
    // let decrease = 4;
    // let icons = document.getElementsByClassName("header-icon");
    
    // window.addEventListener('mousemove', (event) => {
    //     if (window.innerWidth > 1024) {
    //         transform = {x: (event.clientX / window.innerWidth * 100 - 50) / decrease, y: (event.clientY / window.innerHeight * 100 - 50) / decrease};
    //         Array.from(icons).forEach(element => {
    //             element.style.transform = `translate(${transform.x}px, ${transform.y}px)`;
    //         });
    //     }
    // });
    
    // Typing title
    var typedIndex = new Typed('#header-typed', {
        strings: ['Hello!', 'Hi!^1000 I\'m Vlad Kurgankin'],
        typeSpeed: 70,
        backSpeed: 70,
        onComplete: (self) => {
            document.querySelector('.header-right .typed-cursor').style.display = 'none';
        },
    });
    
}

function resumePage() {
    
    document.querySelector('.nav').classList.add('resume-page');
    
    // Arrows animation
    let arrows = document.getElementsByClassName("resume-arrow");
    setInterval(playAnimation, 1500);
    
    function playAnimation() {
        Array.from(arrows).forEach(elem => {
            elem.style.opacity = '0';
        })
        setTimeout(function(){
            arrows[0].style.opacity = '1';
        }, 300)
        setTimeout(function(){
            arrows[1].style.opacity = '1';
        }, 450)
        setTimeout(function(){
            arrows[2].style.opacity = '1';
        }, 600)
    };
    
    // Typing title
    var typedResume = new Typed('#resume-title', {
        strings: ['', 'Check out my resume'],
        typeSpeed: 70,
        onComplete: (self) => {
            document.querySelector('.page-title-block .typed-cursor').style.display = 'none';
        },
    });
}

function projectsPage() {
    
    // Typing title
    var typedResume = new Typed('#projects-title', {
        strings: ['^300My projects'],
        typeSpeed: 70,
        onComplete: (self) => {
            document.querySelector('.projects-title .typed-cursor').style.display = 'none';
            
            // Typing subtitle
            var typedResume = new Typed('#projects-subtitle', {
                strings: ['^300You can also find them on my <a target="_blank" href="https://github.com/Rzhek" class="projects-link">GitHub</a>'],
                typeSpeed: 40,
                onComplete: (self) => {
                    document.querySelector('.projects-subtitle .typed-cursor').style.display = 'none';
                },
            });
        },
    });
}

function contactPage() {
    
    // Typing title
    var typedResume = new Typed('#contact-title', {
        strings: ['', 'Contact Me'],
        typeSpeed: 70,
        onComplete: (self) => {
            document.querySelector('.page-title-block .typed-cursor').style.display = 'none';
        },
    });
}

function toggleMenu() {
    let navList = document.querySelector('.nav-list');
    
    if (navList.classList.contains('active')) { 
        navList.classList.remove('active');
    } else {
        navList.classList.add('active');
    }
}
