
// Navbar Mobile | Cart
import {NavbarView} from './Modulos/Navbar.js'
NavbarView();

window.addEventListener("load", () => {
    document.getElementById("loader").classList.toggle("loader2"); 
})


const formNewsletter = document.getElementById('formNewsletter');
const emailNewsletter = document.getElementById('emailNewsletter')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const TextValidation = document.getElementById('TextValidation')
formNewsletter?.addEventListener('submit', e => {
    e.preventDefault()
    let Email = emailNewsletter.value.trim();

    if(Email === ""){
        TextValidation.style.visibility = 'visible'
        TextValidation.classList.add('TextValidation')
        TextValidation.classList.contains('success')
        TextValidation.classList.remove('success')
        TextValidation.innerHTML = 'EL EMAIL NO PUEDE ESTAR VACIO'
    }else if(!emailRegex.test(Email)){
        TextValidation.style.visibility = 'visible'
        TextValidation.classList.add('TextValidation')
        TextValidation.classList.contains('success')
        TextValidation.classList.remove('success')
        TextValidation.innerHTML = 'El email es invalido'
    }else{
        TextValidation.style.visibility = 'visible'
        TextValidation.classList.remove('TextValidation')
        TextValidation.classList.add('success')
        TextValidation.innerHTML = 'El email fue enviado correctamente'
        return;
    }
})