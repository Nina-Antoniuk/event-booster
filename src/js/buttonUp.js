const buttonUp = document.querySelector('#buttonScrollUp');
const header = document.querySelector('.header');
const sectionOne = document.querySelector('.section1Temp');
const options = {
  threshold: 0.9,
};

function buttonUpActivator(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      buttonUp.classList.remove('isActive');
      return;
    }
    buttonUp.classList.add('isActive');
  });
}

const observer = new IntersectionObserver(buttonUpActivator, options);

function scrollUp(e) {
  header.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

}

observer.observe(header);

buttonUp.addEventListener('click', scrollUp);
