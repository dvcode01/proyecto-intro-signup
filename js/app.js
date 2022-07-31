// SELECTORES O SELECTORS
const formElement = document.querySelector('#form');
const inputElement = document.querySelectorAll('.sign__input');

// Variables
const campos = {
    firstName: false,
    lastName: false,
    email: false,
    password: false
}

// Expresiones o Expressions
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

// EVENTOS O EVENTS
events();
function events(){
    formElement.addEventListener('submit', formSubmit);
    inputElement.forEach(input => {
        input.addEventListener('change', formValidation);
    })
}

// FUNCIONES O FUNCTIONS
function formSubmit(e){
    e.preventDefault();

    const div = document.createElement('div');
    const divText = document.createElement('p');

    const alert = document.querySelector('.message');

    if(!alert){
        div.classList.add('message');
        div.appendChild(divText);
    }
    
    if(campos.firstName && campos.lastName && campos.password && campos.email){
        formElement.reset();
        div.classList.add('message__correct');
        div.classList.remove('message__error');
        divText.textContent = 'Submitted form';
    }else{
        div.classList.remove('message__correct');
        div.classList.add('message__error');
        divText.textContent = 'All fields are required';
    }

    formElement.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
}


function formValidation(e){
    switch(e.target.id){
        case 'firstName': 
            validateField(expresiones.name, e.target, 'firstName');
        break;
        case 'lastName':
            validateField(expresiones.lastName, e.target, 'lastName');
        break;
        case 'email':
            validateField(expresiones.email, e.target, 'email');
        break;
        case 'password':
            validateField(expresiones.password, e.target, 'password');
        break;
    }

}

function validateField(expresion, input, field){
    if(expresion.test(input.value)){
        document.getElementById(`${field}Error`).classList.remove('show');
        input.style.border = '2px solid #5ecf9f';
        campos[field] = true;
    }else{
        document.getElementById(`${field}Error`).classList.add('show');
        input.style.border = '2px solid red';
        campos[field] = false;
    }
}




