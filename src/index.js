const firstNameInput = document.querySelector('.input-container__firstname')
const lastNameInput = document.querySelector('.input-container__lastname')
const emailInput = document.querySelector('.input-container__email')
const passwordInput = document.querySelector('.input-container__password')
const submitInput = document.querySelector('.input-container__submit')
const errorMessage = document.querySelectorAll('small')
const errorIcon = document.querySelectorAll('.input-container__icon')

submitInput.addEventListener('click', (e) => {
    e.preventDefault()

    if (firstNameInput.value === ''){
        errorMessage[0].classList.add('input-container__error--active')
        firstNameInput.style.border = '2px solid #ff7a7a'
        errorIcon[0].classList.add('input-container__icon--active')
        firstNameInput.setAttribute('placeholder', '')
        
    }else{
        errorMessage[0].classList.remove('input-container__error--active')
        firstNameInput.style.border = '1px solid #b9b6d3'
        errorIcon[0].classList.remove('input-container__icon--active')
        
    }

    if (lastNameInput.value === ''){
        errorMessage[1].classList.add('input-container__error--active')
        lastNameInput.style.border = '2px solid #ff7a7a'
        errorIcon[1].classList.add('input-container__icon--active')
        lastNameInput.setAttribute('placeholder', '')
    }else{
        errorMessage[1].classList.remove('input-container__error--active')
        lastNameInput.style.border = '1px solid #b9b6d3'
        errorIcon[1].classList.remove('input-container__icon--active')
    }

    if (validateEmail(emailInput) === false){
        errorMessage[2].classList.add('input-container__error--active')
        emailInput.style.border = '2px solid #ff7a7a'
        errorIcon[2].classList.add('input-container__icon--active')
        emailInput.value = '' 
        emailInput.setAttribute('placeholder', 'email@example.com')
    }else{
        errorMessage[2].classList.remove('input-container__error--active')
        emailInput.style.border = '1px solid #b9b6d3'
        errorIcon[2].classList.remove('input-container__icon--active')
    }

    if (passwordInput.value === ''){
        errorMessage[3].classList.add('input-container__error--active')
        passwordInput.style.border = '2px solid #ff7a7a'
        errorIcon[3].classList.add('input-container__icon--active')
        passwordInput.setAttribute('placeholder', '')
    }else{
        errorMessage[3].classList.remove('input-container__error--active')
        passwordInput.style.border = '1px solid #b9b6d3'
        errorIcon[3].classList.remove('input-container__icon--active')
    }


    function validateEmail (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
            return true
        } else {
            return false
        }
    }
})