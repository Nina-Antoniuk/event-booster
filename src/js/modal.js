const closeModalRef = document.querySelectorAll("[data-modal-close]");
const backdropModal = document.querySelector("[data-modal-backdrop]");
// const body = document.querySelector('body');

function searchCardsLinks() {
  const openModalLinks = document.querySelectorAll("[data-modal-open]");
  if (openModalLinks.length > 0) {
    for (let index = 0; index < openModalLinks.length; index++) {
      const openModalLink = openModalLinks[index];

      openModalLink.addEventListener("click", function (e) {
        const modalName = openModalLink.getAttribute("href").replace("#", "");
        const currentModalLink = document.getElementById(modalName);
        modalOpen(currentModalLink);
        e.preventDefault();
      });
      window.addEventListener("keydown", onEscModalClose);
    }
  }
}

function searchCloseBtn() {
  console.log("searchCloseBtn");
  if (closeModalRef.length > 0) {
    for (let index = 0; index < closeModalRef.length; index++) {
      const el = closeModalRef[index];
      el.addEventListener("click", function (e) {
        closeModal(el.closest(".backdrop"));
        e.preventDefault();
      });
    }
  }
}

function modalOpen(currentModalLink) {
  console.log("modal open");
  if (currentModalLink) {
    const modalActive = document.querySelector(".backdrop.open");
    if (modalActive) {
      closeModal(modalActive);
    }
  }
  currentModalLink.classList.add("open");
  currentModalLink.addEventListener("click", function (e) {
    if (!e.target.closest(".modal")) {
      closeModal(e.target.closest(".backdrop"));
    }
  });
  searchCloseBtn();
}

function onEscModalClose(evt) {
  if (evt.code === "Escape") {
    closeModal(backdropModal);
  }
}

function closeModal(modalActive) {
  modalActive.classList.remove("open");
}

export { searchCardsLinks };
