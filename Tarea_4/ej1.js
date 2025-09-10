let liga = document.getElementById("liga")
let nombre = document.getElementById("nombre")

liga.addEventListener("click", (evt) => {
  console.log("Click en liga")
  evt.preventDefault()
})

nombre.addEventListener("keydown", (evento) => {
  evento.preventDefault()
  console.log(evento.type)
  console.log("Codigo: " + evento.code)
  console.log("Key: " + evento.key)
  console.log(evento.repeat)
  console.log(evento.ctrlKey ? "Presionaste ctrl + " + evento.key : "Solo " + evento.key)
  //nombre.innerText = nombre.innerText + evento.key
  /*if(evento.key =='a'){
    document.getElementById("edad").focus()
  }*/
  if (evento.key == 'Enter'){
    console.log("Evento capturado")
  }
  console.log(evento.location)
})

document.getElementById("formulario").addEventListener("submit", (evento)=> {
  console.log("validar")
  console.log("Se envio el formulario")
  evento.preventDefault()
})

document.getElementById("autos").addEventListener("change", (evento => {
  console.log("Se cambio el valor")
  console.log(document.getElementById("autos").value)
}))