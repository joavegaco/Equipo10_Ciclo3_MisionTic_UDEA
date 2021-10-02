function valida_envia(){
    //valido el nombre
    if ((document.registro.nombre.value.length === 0)||(document.registro.identificacion.value.length === 0)||(document.registro.direccion.value.length === 0)||
    (document.registro.ciudad.value.length===0)||(document.registro.celular.value.length===0)
    ){
           alert("Complete la información en los campos")
           document.registro.nombre.focus()
           return 0;
    }

}
console.log(4);