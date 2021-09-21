import refs from "./refs";

const options = {
  threshold: 0.9,
};

function buttonUpActivator(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      refs.buttonUp.classList.remove("isActive");
      return;
    }
    refs.buttonUp.classList.add("isActive");
  });
}

const observer = new IntersectionObserver(buttonUpActivator, options);

function scrollUp(e) {
  refs.header.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

observer.observe(refs.header);

refs.buttonUp.addEventListener("click", scrollUp);
