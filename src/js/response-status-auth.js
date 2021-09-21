import refs from "./refs.js";
import { showNotification, closeNotification } from "./notification";

export function resolve() {
  authDone();
  showNotification(
    "success",
    "Authorization completed",
    "Authorization completed"
  );
  setTimeout(() => {
    closeNotification();
  }, 2500);
}
export function reject() {
  showNotification(
    "error",
    "Something went wrong",
    "Mail already exists or the password is incorrect"
  );
  setTimeout(() => {
    closeNotification();
  }, 2500);
}

function authDone() {
  refs.iconAuthOn.classList.remove("is-open");
  refs.iconSignInOn.classList.remove("is-open");

  refs.iconAuthDone.classList.add("is-open");
  refs.iconSignInDone.classList.add("is-open");
  refs.authBtn.setAttribute("disabled", "true");
  refs.signInBtn.setAttribute("disabled", "true");

  refs.customerInput.removeAttribute('disabled');
  refs.selectCountry.removeAttribute('disabled');
}
