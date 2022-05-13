const nombreContacto = document.getElementById('nombreContacto');
const apellidoContacto = document.getElementById('apellidoContacto');
const emailContacto = document.getElementById('emailContacto');
const textareaContacto = document.getElementById('textareaContacto');
const formContacto = document.getElementById('formContacto');

const Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
formContacto.addEventListener('submit', e => {
    e.preventDefault()
    let correcto = false
    const contactNombre = nombreContacto.value.trim();
    const contactApellido = apellidoContacto.value.trim();
    const contactEmail = emailContacto.value.trim()
    if(contactNombre === ''){
        errorP(nombreContacto, 'El Nombre no puede estar vacio!')
        correcto = false

    }else{
        success(nombreContacto, 'Correcto!')
        correcto = true;
    }

    if(contactApellido === ''){
        errorP(apellidoContacto, 'El Apellido no puede estar vacio!')
        correcto = false
    }else{
        success(apellidoContacto, 'Correcto!')
        correcto = true;

    }

    if(contactEmail === ''){
        errorP(emailContacto, 'El Email no puede estar vacio!')
        correcto = false

    }else if(!Regex.test(contactEmail)){
        errorP(emailContacto, 'El Email es invalido')
        correcto = false

    }else{
        success(emailContacto,'Correcto!')
        correcto = true;
    }
    if(textareaContacto.value === ''){
        errorP(textareaContacto, 'El comentario no puede estar vacio!')
        correcto = false;
    }else{
        success(textareaContacto,'Correcto!')
        correcto = true;
    }



    if(correcto === true){
        swal('Tu formulario de contacto se envio correctamente!')
    }else{
        swal('Hay algo mal!')
    }

})








function errorP(req, mensaje){
    const formControl = req.parentElement
    const parrafo = formControl.querySelector('small');
    parrafo.innerText = mensaje;
    parrafo.classList.add('error');
}

function success(req, mensaje){
    const formControl = req.parentElement
    const parrafo = formControl.querySelector('small');
    parrafo.innerText = mensaje;
    parrafo.classList.remove('error');
    parrafo.classList.add('success')
    parrafo.classList
}
