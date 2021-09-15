import refs from './refs.js'
export function resolve(){
    console.log('все ок')
    authDone()
}
export function reject(){
    console.log('не ок(или существует имейл или нет такого пользвоателя')
}

function authDone(){
    refs.iconAuthOn.classList.remove('is-open')
    refs.iconSignInOn.classList.remove('is-open')

    refs.iconAuthDone.classList.add('is-open')
    refs.iconSignInDone.classList.add('is-open')
}


// iconAuthOn: document.querySelector('.icon-auth-on'),
// iconSignInOn: document.querySelector('.icon-signIn-on'),
// iconAuthDone: document.querySelector('.icon-auth-done'),
// iconSignInDone: document.querySelector('.icon-signIn-done'),