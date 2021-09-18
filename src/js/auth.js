import refs from "./refs.js";
import { LOGIN_FETCH_LINK, SIGNIN_FETCH_LINK } from "./consts.js";
import authWithEmailAndPassword from "./fetch-auth.js";

let email = "";
let password = "";

refs.authBtn.addEventListener("click", onLoginButtonClick);
refs.signInBtn.addEventListener("click", onSignInBtnClick);
refs.formAuth.addEventListener("submit", authFormSubmit);
refs.formSignIn.addEventListener("submit", signInFormSubmit);
refs.formAuth.addEventListener("click", authFormClose);
refs.formSignIn.addEventListener("click", signInFormClose);

function onLoginButtonClick(e) {
  refs.formAuth.classList.toggle("is-open");
}
function onSignInBtnClick(e) {
  refs.formSignIn.classList.toggle("is-open");
}

function authFormSubmit(e) {
  e.preventDefault();
  getEmailAndPassword(e);
  authWithEmailAndPassword(email, password, LOGIN_FETCH_LINK);

  clearEmailAndPassword(e);
  refs.formAuth.classList.toggle("is-open");
}

function signInFormSubmit(e) {
  e.preventDefault();
  getEmailAndPassword(e);
  authWithEmailAndPassword(email, password, SIGNIN_FETCH_LINK);
  clearEmailAndPassword(e);
  refs.formSignIn.classList.toggle("is-open");
}

function getEmailAndPassword(e) {
  email = e.target.querySelector(".email").value;
  password = e.target.querySelector(".password").value;
}

function clearEmailAndPassword(e) {
  email = "";
  password = "";
  e.target.querySelector(".email").value = "";
  e.target.querySelector(".password").value = "";
}

function authFormClose(e) {
  if (e.target === e.currentTarget) {
    refs.formAuth.classList.toggle("is-open");
  }
  return;
}

function signInFormClose(e) {
  if (e.target === e.currentTarget) {
    refs.formSignIn.classList.toggle("is-open");
  }
  return;
}
