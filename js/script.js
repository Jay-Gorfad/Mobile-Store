
document.addEventListener('DOMContentLoaded', function() {
    const qtyInput = document.getElementById('quantity');
    const qtyMinus = document.querySelector('.qty-minus');
    const qtyPlus = document.querySelector('.qty-plus');
    
    qtyMinus.addEventListener('click', function() {
        let currentValue = parseInt(qtyInput.value, 10);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    qtyPlus.addEventListener('click', function() {
        let currentValue = parseInt(qtyInput.value, 10);
        qtyInput.value = currentValue + 1;
    });
});


//checkout page - different shipping address feature
const choice = document.querySelector('#choice');

if(choice){

    choice.addEventListener('change',()=>{
        if(choice.checked){
            document.querySelector('.js-shipping-details').classList.remove('invisible');
        }
        else{
            document.querySelector('.js-shipping-details').classList.add('invisible');
        }
    });
}


//cart page - to change the quantity of the certain cart item
const quantityModifier = Array.from(document.getElementsByClassName('qty-mod'));

if(quantityModifier && quantityModifier.length>0){
    quantityModifier.forEach(function(qtyMod){
        const minusButton =qtyMod.children[0]; 
        const plusButton = qtyMod.children[2];
        const input = qtyMod.children[1];
        minusButton.addEventListener('click',function(){
            if(input.value==1){
                input.setAttribute('disabled','true');
                minusButton.setAttribute('disabled','true');
            }
            else{
                if(input.hasAttribute('disabled'))
                    input.removeAttribute('disabled');
                if(plusButton.hasAttribute('disabled'))
                    plusButton.removeAttribute('disabled');
                input.value = parseInt(input.value)-1;
            }
        });
        plusButton.addEventListener('click',function(){
            if(input.value==10){
                input.setAttribute('disabled','true');
                plusButton.setAttribute('disabled','true');
            }
            else{
                if(input.hasAttribute('disabled'))
                    input.removeAttribute('disabled');
                if(minusButton.hasAttribute('disabled'))
                    minusButton.removeAttribute('disabled');
                input.value = parseInt(input.value)+1;
            }
        });
    });
}

// Validations

function validateLoginForm() {
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');

    let loginEmailError = document.getElementById('loginEmailError');
    let loginPasswordError = document.getElementById('loginPasswordError');

    let isValid = true;

    if (loginEmail.value.trim() === '') {
        loginEmailError.style.color = "red";
        loginEmailError.innerText = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail.value)) {
        loginEmailError.style.color = "red";
        loginEmailError.innerText = 'Invalid email format';
        isValid = false;
    } else if (loginEmail.value.length > 100) {
        loginEmailError.style.color = "red";
        loginEmailError.innerText = 'Email must be 100 characters or less';
        isValid = false;
    } else {
        loginEmailError.innerText = '';
    }

    if (loginPassword.value.trim() === '') {
        loginPasswordError.style.color = "red";
        loginPasswordError.innerText = 'Password is required';
        isValid = false;
    } else if (loginPassword.value.length < 6) {
        loginPasswordError.style.color = "red";
        loginPasswordError.innerText = 'Password must be at least 6 characters long';
        isValid = false;
    } else if (loginPassword.value.length > 20) {
        loginPasswordError.style.color = "red";
        loginPasswordError.innerText = 'Password must be 20 characters or less';
        isValid = false;
    } else {
        loginPasswordError.innerText = '';
    }

    return isValid;
}

function validateForgotPasswordForm() {
    let email = document.getElementById('otpEmail');
    let emailError = document.getElementById('otpEmailError');
    let isValid = true;

    if (email.value.trim() === '') {
        emailError.style.color = "red";
        emailError.innerText = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.style.color = "red";
        emailError.innerText = 'Invalid email format';
        isValid = false;
    } else if (email.value.length > 100) {
        emailError.style.color = "red";
        emailError.innerText = 'Email must be 100 characters or less';
        isValid = false;
    } else {
        emailError.innerText = '';
    }

    return isValid;
}

function validateOtpForm() {
    let otp = document.getElementById('otp');
    let otpError = document.getElementById('otpError');

    let isValid = true;

    if (otp.value.trim() === '') {
        otpError.style.color = "red";
        otpError.innerText = 'OTP is required';
        isValid = false;
    } else if (!/^\d{6}$/.test(otp.value)) {
        otpError.style.color = "red";
        otpError.innerText = 'OTP must be exactly 6 digits';
        isValid = false;
    } else {
        otpError.innerText = '';
    }

    return isValid;
}

function validateRegistrationForm() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    let isValid = true;

    if (name.value.trim() === '') {
        nameError.style.color = "red";
        nameError.innerText = 'Name is required';
        isValid = false;
    } else if (/\d/.test(name.value)) {
        nameError.style.color = "red";
        nameError.innerText = 'Name should not contain numbers';
        isValid = false;
    } else if (name.value.length > 50) {
        nameError.style.color = "red";
        nameError.innerText = 'Name must be 50 characters or less';
        isValid = false;
    } else {
        nameError.innerText = '';
    }

    if (email.value.trim() === '') {
        emailError.style.color = "red";
        emailError.innerText = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.style.color = "red";
        emailError.innerText = 'Invalid email format';
        isValid = false;
    } else if (email.value.length > 100) {
        emailError.style.color = "red";
        emailError.innerText = 'Email must be 100 characters or less';
        isValid = false;
    } else {
        emailError.innerText = '';
    }

    if (password.value.trim() === '') {
        passwordError.style.color = "red";
        passwordError.innerText = 'Password is required';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.style.color = "red";
        passwordError.innerText = 'Password must be at least 6 characters long';
        isValid = false;
    } else if (password.value.length > 20) {
        passwordError.style.color = "red";
        passwordError.innerText = 'Password must be 20 characters or less';
        isValid = false;
    } else {
        passwordError.innerText = '';
    }

    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.style.color = "red";
        confirmPasswordError.innerText = 'Confirm Password is required';
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.style.color = "red";
        confirmPasswordError.innerText = 'Passwords do not match';
        isValid = false;
    } else {
        confirmPasswordError.innerText = '';
    }

    return isValid;
}