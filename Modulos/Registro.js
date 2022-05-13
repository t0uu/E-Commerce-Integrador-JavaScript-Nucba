const Registro = document.getElementById('Registro');
const nombreCuenta = document.getElementById('nombreCuenta');
const apellidoCuenta = document.getElementById('apellidoCuenta');
const emailCuenta = document.getElementById('emailCuenta');
const passwordCuenta = document.getElementById('passwordCuenta');


//*regex: https://regexr.com/3e48o
//la i al final es insensitive: no distingue mayusculas y minusculas
const RegexEmailRegistro = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

//*https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
const RegexPassRegistro = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


Registro?.addEventListener('submit', e => {
    e.preventDefault()
    let correcto = false
    const nombreRegistro = nombreCuenta.value.trim();
    const apellidoRegistro = apellidoCuenta.value.trim();
    const emailRegistro = emailCuenta.value.trim();
    const passwordRegistro = passwordCuenta.value.trim();

    if(nombreRegistro === ''){
        errorP(nombreCuenta, 'El Nombre no puede estar vacio!')
        correcto = false

    }else{
        success(nombreCuenta, 'Correcto!')
        localStorage.setItem("Nombre", nombreCuenta.value)
        correcto = true;
    }

    if(apellidoRegistro === ''){
        errorP(apellidoCuenta, 'El Apellido no puede estar vacio!')
        correcto = false
    }else{
        localStorage.setItem("Apellido", apellidoCuenta.value)
        success(apellidoCuenta, 'Correcto!')
        correcto = true;

    }

    if(emailRegistro === ''){
        errorP(emailCuenta, 'El Email no puede estar vacio!')
        correcto = false

    }else if(!RegexEmailRegistro.test(emailRegistro)){
        errorP(emailCuenta, 'El Email es invalido')
        correcto = false

    }else{
        success(emailCuenta,'Correcto!')
        localStorage.setItem("Email", emailCuenta.value)
        correcto = true;

    }

    if(passwordRegistro === ''){
        errorP(passwordCuenta,'La Contraseña no puede estar vacia!')
        correcto = false

    }else if(!RegexPassRegistro.test(passwordRegistro)){
        errorP(passwordCuenta, 'Debe contener 8 caracteres,1 numero,1 mayuscula' )
        correcto = false

    }
    else{
        success(passwordCuenta, 'Correcto!')
        localStorage.setItem('password',passwordCuenta.value)
        correcto = true;
    }
    
    if(correcto === true){
        swal('TUS DATOS FUERON GUARDADOS CORRECTAMENTE!')
        window.location.replace('/Usuario.html');
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
    parrafo.classList.add('success');
}