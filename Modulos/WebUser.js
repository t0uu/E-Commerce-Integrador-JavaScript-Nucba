const NombreLocal = document.getElementById('NombreLocal');
const EmailLocal = document.getElementById('EmailLocal')
const ApellidoLocal = document.getElementById('ApellidoLocal')
NombreLocal.textContent = window.localStorage.getItem("Nombre")
EmailLocal.textContent = window.localStorage.getItem("Email");
ApellidoLocal.textContent = window.localStorage.getItem("Apellido");