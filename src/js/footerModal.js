import refs from './refs.js'

$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1280:{
                items:3
            }
        }
    });
});

refs.footerSection.addEventListener('click', modalFooterOpen)
refs.footerModal.addEventListener('click', modalFooterClose)

function modalFooterOpen(){
    refs.footerModal.classList.toggle('is-open')
}

function modalFooterClose(e){
    if( e.target === e.currentTarget){
        refs.footerModal.classList.toggle('is-open')
    }
    return
}