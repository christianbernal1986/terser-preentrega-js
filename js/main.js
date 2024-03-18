

// D.O.M

// inputs

const formDom= document.querySelector("#formDom");
console.log(formDom)
const inputs= document.querySelectorAll("input");
console.log(inputs)
const usuarioDom= inputs[0]
console.log(usuarioDom)
const passwordDom= inputs[1]
console.log(passwordDom)
const enviar= inputs[2]
console.log(enviar)
const vacio= document.querySelector("#camposVacios")

let usuarios;
if(localStorage.getItem("usuarios")){
    usuarios=JSON.parse(localStorage.getItem("usuarios"))
}else{
    usuarios=[]
}

// constructor de usuarios

class Usuario {
    constructor(usuario,password){
        this.usuario = usuario;
        this.password = password;
    }
}

// guardar usuario

function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

//guardar ls
function guardarEnLS(arr) {
    return localStorage.setItem('usuarios',JSON.stringify(arr))
}

// evento
formDom.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    // verificacion de campos vacios
    
    const usuarioValue = usuarioDom.value.trim();
    const passwordValue = passwordDom.value.trim();

    if (usuarioValue === '' || passwordValue === '') {
         vacio.innerHTML='Por favor, completa todos los campos.';
        return; // Detenemos la ejecución si algún campo está vacío
    }
    const newUsuario=new Usuario(usuarioDom.value, passwordDom.value) 
    guardarUsuario(newUsuario) 
    guardarEnLS(usuarios)
    location.href="./pages/login.html"
})


