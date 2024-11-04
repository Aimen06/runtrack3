$('#btnRegister').on( "click",registerValidate);
let error;
$('#loginBtn').on( "click",loginValidate);

function registerValidate(e) {
    error = null;
    e.preventDefault();
    removeError();
    checkFirstname();
    checkLastname();
    checkEmail();
    checkPassword();
    checkAdress();
    checkZipcode();
    if(error) {
        $('h2').after(`<div class="error">Il y ${error} erreur(s)`);
    } else {
        window.location.href = "connexion.html";
    }
}

function loginValidate(e) {
    error = null;
    e.preventDefault();
    removeError();
    checkEmail();
    checkPassword();
    if(error) {
        $('h2').after(`<div class="error">Il y ${error} erreur(s)`);
    } else {
        removeError();
        window.location.href = "connexion.html";
    }
}

function checkFirstname()
{
    let firstname = $('#firstname').val();
    let firstnameError = null;
    if (firstname.length<3) {
        console.log('Le nom doit avoir au moins 3 caractères');
        firstnameError = 'Le nom doit avoir au moins 3 caractères';
    } else if (firstname.length>30) {
        console.log('Le nom doit avoir au moins 3 caractères');
        firstnameError = 'Le nom doit avoir moins de 30 caractères';
    } 
    if (firstnameError) {
        $('#firstname').after(`<div class="error">${firstnameError}</div>`)
        error++;
    }

}

function checkLastname()
{
    let lastname = $('#lastname').val();
    let lastnameError = null;
    if (lastname.length<3) {
        lastnameError = 'Le prénom doit avoir au moins 3 caractères';
    } else if (lastname.length>30) {
        lastnameError = 'Le prénom doit avoir moins de 30 caractères';
    }
    if(lastnameError) {
        $('#lastname').after(`<div class="error">${lastnameError}<div>`)
        error++;
    }

}

function checkEmail()
{
    console.log('checkEmail')
    let email = $('#email').val();
    let emailPatten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(emailPatten))
    {
        $('#email').after(`<div class="error">Le mail n'est pas correct<div>`)
        error++;
    }

}

function checkPassword()
{
    let password = $('#password').val();
    let passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>/])(?=.{8,30}$).*/;
    if(!password.match(passwordPattern))
    {
        $('#password').after(`<div class="error">Le mot de passe doit avoir 1 Majuscule , 1 symbole et 8 caractères minimum<div>`)
        error++;
    }

}

function checkAdress()
{
    let address = $('#address').val();
    let addressError = null;
    if (address.length<10) {
        addressError = "L'adresse doit avoir au moins 10 caractères";
    } else if (address.length>100) {
        addressError = 'Le nom doit avoir moins de 100 caractères';
    }
    if(addressError) {
        $('#address').after(`<div class="error">${addressError}<div>`);
        error++;
    }

}

function checkZipcode()
{
    let zipcode = $('#zipcode').val();
    let zipcodePatten = /^[0-9]{5}$/;
    if(!zipcode.match(zipcodePatten))
    {
        $('#zipcode').after(`<div class="error">Le code postal doit avoir 5 chiffres<div>`);
        error++;
    }

}

function removeError()
{
    $('.error').remove();
}