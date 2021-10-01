function valida_envia(){
    //valido el nombre
    if (document.registro.contrasenya.value != document.registro.confirmarcontrasenya.value
    ){
           alert("Revise si los datos coinciden")
           document.registro.contrasenya.focus()
           return 0;
    }



 
    //valido el celular. tiene que ser entero de 10 dígitos
    celular = document.registro.celular.value
    celular = validarEntero(celular)
    document.registro.celular.value=celular
    if (celular==""){
           alert("Tiene que introducir un número válido de celular.")
           document.registro.celular.focus()
           return 0;
    }else{
           if (celular.value.length<10){
                  alert("Debe ser mayor de 18 años.")
                  document.registro.celular.focus()
                  return 0;
           }
    }
 
    //valido el interés
    if (document.registro.interes.selectedIndex==0){
           alert("Debe seleccionar un motivo de su contacto.")
           document.registro.interes.focus()
           return 0;
    }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.registro.submit();
}

console.log(4)