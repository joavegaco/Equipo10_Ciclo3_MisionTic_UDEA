function valida_envia(){
    //valido el nombre
    if (document.registro.contrasenya.value != document.registro.confirmarcontrasenya.value
    ){
           alert("Revise si los datos coinciden")
           document.registro.contrasenya.focus()
           return 0;
    }

}

console.log(4)