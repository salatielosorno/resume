import './styles.css'

function addEventsButtons(){
    let links = document.body.querySelectorAll('.nav__link');
    links.forEach((e,k)=>{
        e.addEventListener('click', ()=>{
            hide(links)
            let link = document.body.querySelector('#'+e.dataset.link);
            link.style.display = 'block';

            document.getElementById("wrap__content").scrollTop = 0
        });
    })
}
function hide(links){
    links.forEach((e,k)=>{
        let link = document.body.querySelector('#'+e.dataset.link);
        link.style.display = 'none';
    })
}
addEventsButtons();