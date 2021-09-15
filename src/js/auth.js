const authBtn = document.querySelector('.auth-btn')
const signInBtn = document.querySelector('.signin-btn')
const formAuth = document.querySelector('.auth')
const formSignIn = document.querySelector('.signIn')

authBtn.addEventListener('click', onLoginButtonClick)
// signInBtn.addEventListener('click', onSignInBtnClick)
formAuth.addEventListener('submit', authFormSubmit)


function onLoginButtonClick() {
    formAuth.classList.toggle('is-open')
}

function authFormSubmit(e) {
    e.preventDefault();
    let email = e.target.querySelector('.email').value
    let password = e.target.querySelector('.password').value
    authWithEmailAndPassword(email, password)

    e.target.querySelector('.email').value = ''
    e.target.querySelector('.password').value = ''
    console.log('ok')
    formAuth.classList.toggle('is-open')

}

function authWithEmailAndPassword(email, password){
    const API_KEY = `AIzaSyC1ZrE8wfTMzQComHl8bVNa053NAxSTKFI`
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json()).then(r => {
        alert('Вы авторизировались')
    }).catch(err => {
        alert('Такой имейл уже существет')
    })
}






function signInWithEmailAndPassword(email, password){
    const API_KEY = `AIzaSyC1ZrE8wfTMzQComHl8bVNa053NAxSTKFI`
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json)
}