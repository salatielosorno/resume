import './styles.css'

function addEventsButtons(){
    let links = document.body.querySelectorAll('.nav__link');
    links.forEach((e,k)=>{
        e.addEventListener('click', ()=>{
            hideSections(links)
            let link = document.body.querySelector('#'+e.dataset.link);
            
            if((link === null || link === undefined) && window.innerWidth <= 540)
                link = document.body.querySelector('.'+e.dataset.link);

            if(link != null || link != undefined){
                link.style.display = 'block';
            }
            setLinkActive(e.dataset.link);
            redimentionProfile();
            document.getElementById("wrap__content").scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    })
}
function setLinkActive(id) {
    let links = document.body.querySelectorAll('[data-link="' + id + '"]');
    links.forEach((e,k)=>{
        e.classList.add('nav__link-active')
    })
}
function unsetLinkActive(id) {
    let links = document.body.querySelectorAll('[data-link="' + id + '"]');
    links.forEach((e,k)=>{
        e.classList.remove('nav__link-active')
    })
}
function hideSections(links){
    links.forEach((e,k)=>{
        let link = document.body.querySelector('#'+e.dataset.link);
        
        if((link === null || link === undefined) && window.innerWidth <= 540)
            link = document.body.querySelector('.'+e.dataset.link);
        
        if(link != null || link != undefined)
            link.style.display = 'none';
        unsetLinkActive(e.dataset.link)
    })
}
function hideHomeMobil(){
    let homeMobil = document.querySelector('#profile');
    homeMobil.style.display = 'none';
}
function showAboutMe(){
    let homeMobil = document.querySelector('#about');
    homeMobil.style.display = 'block';
}
function load() {
    if(window.innerWidth <= 540){
        let profile = document.querySelector("#profile");
        let about = document.querySelector("#about");
        /*if(window.innerHeight >= 580){
            profile.style.height = (window.innerHeight - 73) + "px";
        }*/
        redimentionProfile();
        profile.style.display = 'block';
        about.style.display = 'none';
    }
}
function redimentionProfile(){
    if(window.innerHeight >= 580){
        document.querySelector("#profile").style.height = (window.innerHeight - 73) + "px";
    }
}
function resize(){
    let linksActive = document.querySelectorAll('.nav__link-active');

    linksActive.forEach((e,k)=>{
        let sectionActive = e.dataset.link;

        if(sectionActive == 'profile'){
            /*if(window.innerHeight >= 580){
                document.querySelector("#profile").style.height = (window.innerHeight - 73) + "px";
            }*/
            redimentionProfile();
            hideHomeMobil();
            showAboutMe();
        }
    })
}

addEventsButtons();
window.onresize = () => { resize() }
window.onload = () => { load() }
window.addEventListener('orientationchange', resize);