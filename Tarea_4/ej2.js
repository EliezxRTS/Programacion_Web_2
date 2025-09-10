let fuente = document.getElementById("fuente")
let destino = document.getElementById("destino")

fuente.addEventListener("dragstart", (evt) => {
  console.log("Inicio el arrastre")
})

destino.addEventListener("dragover", (evt) => {
  evt.preventDefault()
})

destino.addEventListener("drop", (evt) => {
  evt.preventDefault()
  console.log("Soltado")
})