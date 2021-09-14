const buttonUp = document.querySelector('#buttonScrollUp')
const header = document.querySelector('.headerTemp')
const sectionOne = document.querySelector('.section1Temp')
const options = {
    treshhold: 0.5,
}

function buttonUpActivator(entries, observer) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            buttonUp.classList.remove('isActive')
            return
        }
        buttonUp.classList.add('isActive')
    })
}




const observer = new IntersectionObserver(buttonUpActivator, options)



function scrollUp(e) {
    header.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}

observer.observe(header)




buttonUp.addEventListener('click', scrollUp)