const firstNameInput = document.querySelector('.input-wrapper__first-name')
const lastNameInput = document.querySelector('.input-wrapper__last-name')
const emailInput = document.querySelector('.input-wrapper__email')
const passwordInput = document.querySelector('.input-wrapper__password')
const submitInput = document.querySelector('.input-wrapper__submit')
const errorMessage = document.querySelectorAll('small')
const errorIcon = document.querySelectorAll('.input-wrapper__icon')

submitInput.addEventListener('click', (e) => {
    e.preventDefault()

    if (firstNameInput.value === ''){
        errorMessage[0].classList.add('input-wrapper__message--error')
        firstNameInput.style.border = '2px solid #ff7a7a'
        errorIcon[0].classList.add('input-wrapper__icon--error')
        firstNameInput.setAttribute('placeholder', '')
        
    }else{
        errorMessage[0].classList.remove('input-wrapper__message--error')
        firstNameInput.style.border = '1px solid #b9b6d3'
        errorIcon[0].classList.remove('input-wrapper__icon--error')
        
    }

    if (lastNameInput.value === ''){
        errorMessage[1].classList.add('input-wrapper__message--error')
        lastNameInput.style.border = '2px solid #ff7a7a'
        errorIcon[1].classList.add('input-wrapper__icon--error')
        lastNameInput.setAttribute('placeholder', '')
    }else{
        errorMessage[1].classList.remove('input-wrapper__message--error')
        lastNameInput.style.border = '1px solid #b9b6d3'
        errorIcon[1].classList.remove('input-wrapper__icon--error')
    }

    if (validateEmail(emailInput) === false){
        errorMessage[2].classList.add('input-wrapper__message--error')
        emailInput.style.border = '2px solid #ff7a7a'
        errorIcon[2].classList.add('input-wrapper__icon--error')
        emailInput.value = '' 
        emailInput.setAttribute('placeholder', 'email@example.com')
        emailInput.classList.add('input-wrapper__email--error')
    }else{
        errorMessage[2].classList.remove('input-wrapper__message--error')
        emailInput.style.border = '1px solid #b9b6d3'
        errorIcon[2].classList.remove('input-wrapper__icon--error')
        emailInput.classList.remove('input-wrapper__email--error')
    }

    if (passwordInput.value === ''){
        errorMessage[3].classList.add('input-wrapper__message--error')
        passwordInput.style.border = '2px solid #ff7a7a'
        errorIcon[3].classList.add('input-wrapper__icon--error')
        passwordInput.setAttribute('placeholder', '')
    }else{
        errorMessage[3].classList.remove('input-wrapper__message--error')
        passwordInput.style.border = '1px solid #b9b6d3'
        errorIcon[3].classList.remove('input-wrapper__icon--error')
    }


    function validateEmail (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
            return true
        } else {
            return false
        }
    }
})