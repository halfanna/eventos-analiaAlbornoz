
let nombreUsuario = document.getElementById("nombre").value 
let apellidoUsuario = document.getElementById("apellido").value 
let ciudadUsuario = document.getElementById('ciudad').value
let provinciaUsuario =document.getElementById('provincia').value
let telUsuario = document.getElementById("telefono").value 
let emailUsuario = document.getElementById("email").value 




let formularioRegistro =document.getElementById('main')
let boton = document.getElementById('button')


formularioRegistro.addEventListener('submit',datosForm)




function datosForm(e){
  e.preventDefault();
  let datosFormulario =e.target;
 
  console.log(datosFormulario.children[1].value)
  console.log(datosFormulario.children[2].value)
  console.log(datosFormulario.children[3].value)
  console.log(datosFormulario.children[4].value)
  console.log(datosFormulario.children[5].value)
  }
