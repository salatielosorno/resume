import './styles.css'

function addEventKnowme(){
    let barmenu = document.body.querySelector('#knowme');
    barmenu.addEventListener('click', (e)=> {
        showMenu(e.currentTarget);
    });
}
function addEventsButtons(){
    let links = document.body.querySelectorAll('.nav__item');

    links.forEach((e,k)=>{
        e.addEventListener('click', ()=>{
            hide(links);
            let link = document.body.querySelector('#'+e.dataset.link);
            link.style.display = 'block';
            link.classList.remove('slideRight');
            link.classList.add('wrap__content--margin');
        });
    })
}
function showMenu(target){
    let nav = document.body.querySelector(".wrap__content");
    nav.classList.add('slideRight');
    target.style.visibility = 'hidden';
}
function hide(links){
    links.forEach((e,k)=>{
        let link = document.body.querySelector('#'+e.dataset.link);
        link.style.display = 'none';
        document.body.querySelector('#home').style.display = 'none';
    })
}

setTimeout(() => {
    let button = document.body.querySelector('#knowme');
    button.style.visibility = 'visible';
    button.style.opacity = 1;
}, 2000);

addEventKnowme();
addEventsButtons();