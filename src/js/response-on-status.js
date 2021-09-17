import refs from "./refs.js";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";

export function resolve() {
  authDone();
  new Notify({
    status: "success",
    title: "Authorization completed",
    text: "Authorization completed",
    effect: "fade",
    type: 1,
  });
}
export function reject() {
  new Notify({
    status: "error",
    title: "Try again",
    text: "Try again",
    effect: "fade",
    type: 1,
  });
}

function authDone() {
  refs.iconAuthOn.classList.remove("is-open");
  refs.iconSignInOn.classList.remove("is-open");

  refs.iconAuthDone.classList.add("is-open");
  refs.iconSignInDone.classList.add("is-open");
  // refs.authBtn.setAttribute("disabled", "true");
  // refs.signInBtn.setAttribute("disabled", "true");
}
