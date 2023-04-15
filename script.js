(function(){

    window.toggleMenu = toggleMenu;
    
    if (window.location.pathname.endsWith("index.html")) {
        let transform;
        let decrease = 4;
        let icons = document.getElementsByClassName("header-icon");
        
        window.addEventListener('mousemove', (event) => {
            transform = {x: (event.clientX / window.innerWidth * 100 - 50) / decrease, y: (event.clientY / window.innerHeight * 100 - 50) / decrease};
            Array.from(icons).forEach(element => {
                element.style.transform = `translate(${transform.x}px, ${transform.y}px)`;
            });
        }); 
    } else if (window.location.pathname.endsWith("resume.html")) {
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
        }
    }
    
})()


function toggleMenu() {
    let navList = document.querySelector('.nav-list');

    if (navList.classList.contains('active')) { 
        navList.classList.remove('active');
    } else {
        navList.classList.add('active');
    }
}

