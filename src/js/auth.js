import refs from './refs.js'
import {logInFetchLink, signInFetchLink} from './linksForFatch.js'
import authWithEmailAndPassword from './fetchAuth.js'

let email = ''
let password = ''

refs.authBtn.addEventListener('click', onLoginButtonClick)
refs.signInBtn.addEventListener('click', onSignInBtnClick)
refs.formAuth.addEventListener('submit', authFormSubmit)
refs.formSignIn.addEventListener('submit', signInFormSubmit)

function onLoginButtonClick() {
    refs.formAuth.classList.toggle('is-open')
}
function onSignInBtnClick(e){
    refs.formSignIn.classList.toggle('is-open')
}

function authFormSubmit(e) {
    e.preventDefault();
    getEmailAndPassword(e)
    authWithEmailAndPassword(email, password, logInFetchLink)

    clearEmailAndPassword()
    refs.formAuth.classList.toggle('is-open')

}

function signInFormSubmit(e){
    e.preventDefault();
    getEmailAndPassword(e)
    authWithEmailAndPassword(email, password, signInFetchLink)
    clearEmailAndPassword()
    refs.formSignIn.classList.toggle('is-open')
}

function getEmailAndPassword (e){
    email = e.target.querySelector('.email').value
    password = e.target.querySelector('.password').value
}

function clearEmailAndPassword(){
    email = ''
    password = ''
}


