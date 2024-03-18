
// inputs

const formReg= document.querySelector("#formReg");
console.log(formReg)
const inputs= document.querySelectorAll("input");
console.log(inputs)
const usuarioR= inputs[0]
console.log(usuarioR)
const passwordR= inputs[1]
console.log(passwordR)
const enviar2= inputs[2]
console.log(enviar2)
const mensaje= document.querySelector("#mensaje")

// Inicio sesion

function inicioSesion(usuarios) {
let user= usuarios.find((usuario) => {
    return usuario.usuario == usuarioR.value && usuario.password == passwordR.value;
})
user ? location.href="../pages/calcular.html" : mensaje.innerHTML= "Usuario no encontrado"

}

// recuperar ls
function recuperarLS() {
    return JSON.parse(localStorage.getItem("usuarios"))
}
// ejecucion
const usuariosLS = recuperarLS()

// evento
formReg.addEventListener("submit", (e) => {
    e.preventDefault()
    inicioSesion(usuariosLS)
})