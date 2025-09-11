let campo = document.getElementById("nombre")
let mensaje = document.getElementById("salida")

campo.addEventListener("copy", (evt => {
  console.log("Copiado")
  evt.clipboardData.setData("text", window.getSelection().toString())
  evt.preventDefault()
  mensaje.innerText = "Copiado ... " + window.getSelection().toString()
}))

campo.addEventListener("paste", (evt) => {
  console.log("Pegado")
  const pegado = evt.clipboardData.getData("text")
  mensaje.innerText = "Pegado ... " + pegado
})

window.addEventListener("beforeprint", (evt) => {
  console.log("Antes de imprimir")
  campo.style.display="none"
  alert("Ejemplo ...")
})

window.addEventListener("afterprint", (evt) => {
  console.log("Despues de imprimir")
  campo.style.display="block"
  alert("Ejemplo despues de impresion")
})