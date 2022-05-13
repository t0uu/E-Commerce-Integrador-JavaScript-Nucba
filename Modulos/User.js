const FormUser = document.getElementById('FormUser');
const emailUser = document.getElementById('emailUser');
const passwordUser = document.getElementById('passwordUser');
FormUser.addEventListener('submit', e => {
    e.preventDefault()
    let Exito = false
    if(emailUser.value === window.localStorage.getItem("Email")){
        console.log('Es Correcto')
        Exito = true
    }else{
        Exito = false
    }

    if(passwordUser.value === window.localStorage.getItem('password')){
        Exito = true
    }else{
        Exito = false
    }

    if(Exito === true){
        swal('Tus datos fueron correctos, seras redireccionado a la web de usuario!')
        window.location.replace('/WebUser.html');
    }else{
        swal('Tus datos no son correctos, intenta de nuevo o crea una cuenta')
    }

})