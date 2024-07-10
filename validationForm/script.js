//  form attributes catch
const form = document.querySelector('#form');

const username = document.querySelector('#username');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');

const gender = document.getElementsByName('gender');

// click submit button how do
form.addEventListener('submit', (event) => {
    validationForm();

    if (isVaildForm() == true) {
        form.submit();
    } else {
        event.preventDefault();
    }

});


function isVaildForm() {
    const allInput = document.querySelectorAll('.input_group');
    let result = true;
    allInput.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

// form input validation
function validationForm() {
    if (firstname.value.trim() === '') {
        setError(firstname, 'First name cannot be empty');
    } else if (firstname.value.trim().length < 6) {
        setError(firstname, 'First name must be at least 6 characters');
    } else if (firstname.value.trim().charAt(0) !== firstname.value.trim().charAt(0).toUpperCase()) {
        setError(firstname, 'First name must start with a capital letter');
    } else {
        setSuccess(firstname);
    }
    
    if (lastname.value.trim() == '') {
        setError(lastname, 'lastname cannot be empty');
    } else if (lastname.value.trim().length < 6) {
        setError(lastname, 'Last name must be at least 6 characters');
    } else if (lastname.value.trim() != lastname.value.trim().charAt(0).toUpperCase() + lastname.value.trim().slice(1)) {
        setError(lastname,'lastname with the first letter capitalized');
    }else {
        setSuccess(lastname);
    }

    if (username.value.trim() == '') {
        setError(username, 'username cannot be empty');
    } else if (username.value.trim().length < 5 || username.value.trim().length > 14) {
        setError(username, 'username must be between 5 and 14 characters');
    } else if (username.value.trim().toLowerCase() != username.value.trim()) {
        setError(username,'Use lowercase letters for the username');
    }else {
        setSuccess(username);
    }

    let selectGender =false;
    for (let i=0;i<gender.length;i++){
        if(gender[i].checked){
            selectGender = true;
            break;
        }
    }
    if(!selectGender){
        setError(gender[0].parentElement,"gender cannot be empty");
    }else{
        setSuccess(gender[0].parentElement);
    }

    if (confirm_password.value.trim() == '') {
        setError(confirm_password, 'confirm password cannot be empty');
    }else if (confirm_password.value.trim() != password.value.trim()) {
        setError(confirm_password, 'password does not match');
    }else {
        setSuccess(confirm_password);
    }

    if (password.value.trim() == '') {
        setError(password, 'password cannot be empty');
    } else if (password.value.trim().length < 4 || password.value.trim().length > 20) {
        setError(password, 'password must be between 4 and 20 characters');
        confirm_password.value = '';
        setError(confirm_password);
    } else if (!/[^a-zA-Z0-9]/.test(password.value.trim())) {
        setError(password, 'At least one uppercase letter, number and special character');
        confirm_password.value = '';
        setError(confirm_password);
    }else {
        setSuccess(password);
    }

 
   
}

// View to error message 
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

// View to not error message 
function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

// show password
const check1 = document.querySelector('#cb_password');
const check2 = document.querySelector('#cb_confirm_password');

check1.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

check2.onclick = function () {
    if (confirm_password.type == "password") {
        confirm_password.type = "text";
    } else {
        confirm_password.type = "password";
    }
}