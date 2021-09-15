const authBtn = document.querySelector('.auth-btn')
const form = document.querySelector('.form-auth')
const signIn = document.querySelector('.sign-in')
const conteiner = document.querySelector('.conteiner')


authBtn.addEventListener('click', onLoginButtonClick)
signIn.addEventListener('click', onSignInBtnClick)
form.addEventListener('submit', authFormSubmit)


function onLoginButtonClick() {
    form.classList.toggle('is-open')
}

function authFormSubmit(e) {
    e.preventDefault();
    let email = e.target.querySelector('.email').value
    let password = e.target.querySelector('.password').value
    authWithEmailAndPassword(email, password)

    e.target.querySelector('.email').value = ''
    e.target.querySelector('.password').value = ''
    console.log('ok')
    form.classList.toggle('is-open')

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
    }).then(r => r.json())
}

function onSignInBtnClick(){
    renderModalSignIn()
    const formSingIn = document.querySelector('.form-singIn')
    formSingIn.addEventListener('submit', onSignInSubmit)
}

function onSignInSubmit(){
    e.preventDefault();
    let email = e.target.querySelector('.email').value
    let password = e.target.querySelector('.password').value
    signInWithEmailAndPassword(email, password)

}

function renderModalSignIn(){
    conteiner.insertAdjacentHTML('afterbegin', modalSingIn())

}

function modalSingIn(){
    const modal = `<div class="form-singIn">

    <form class="form-singIn">
        <label class="form-label">
          <span class="label-text">Email</span>
          <input type="email" class="email" name="email" required minlength="3">
        </label>
      
        <label class="form-label">
          <span class="label-text">Password</span>
          <input type="password" class="password" name="mail" required>
        </label>
      
        <button class="submit" type="submit">Submit</button>
      </form>
</div>`

return modal
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