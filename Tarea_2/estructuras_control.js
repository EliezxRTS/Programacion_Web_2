let edad = 15;

/*
console.log("condicional simple")
if (edad >= 18){
  console.log("Eres mayor de edad")
  console.log("XDXDXD")
}*/

/*console.log("condicional bifurcacion")
if (edad >= 18)
  console.log("Eres mayor de edad")
else {
  console.log("No puedes entrar al antro")
  console.log("Lagrimita")
}*/

/*console.log("condicional anidado")
if (edad >= 18)
  console.log("Eres mayor de edad")
else {
  console.log("No puedes entrar al antro")
  console.log("Lagrimita")
}*/

/*console.log("Seleccion multiple Switch")
let dia = 'sabado'

if (dia == 'lunes'){
    console.log("Inicio de semana")
}else if(dia == 'martes'){
    console.log("Segundo lunes")
}else if(dia == 'miercoles'){
    console.log("Ombligo de la semana")
}else if(dia == 'jueves'){
    console.log("Pre viernes")
}else if(dia == 'viernes'){
    console.log("Hoy toca y el cuerpo lo sabe!!!")
}else {
    console.log("A descansar")
}

let dia = 'sabado'

switch(dia){
  case 'lunes':
    console.log("Inicio de semana")
    break
  case 'martes':
    console.log("Segundo lunes")
    break
  case 'miercoles':
    console.log("Ombligo de la semana")
    break
  case 'jueves':
    console.log("Pre viernes")
    break
  case 'viernes':
    console.log("Hoy toca y el cuerpo lo sabe!!!")
    break
  default:
    console.log("A descansar")
}*/

/*console.log("itercion for")
for(let i=0; i<5; i++)
  console.log("Hola " + i)
*/

/*const miArray = ["a", "b", "c"]
for (let índice in myArray) {
	consoñe.log(índice)
}*/

/*let contador = 1

while (contador <=5){
	console.log("Contador: " + contador)
	contador++
}*/

/*const calificaciones = [9, 7, 10, 5, 8]

for (let i=0; i<calificaciones.length; i++){
	console.log(calificaciones[i])
}*/

/*let numero =0

do {
	console.log("Numero: " + numero)
	numero++
} while (numero < 3)*/

/*for (let i = 1; i <= 10; i++){
	if (i === 3) continue
	if (i === 5) break
	console.log("i: " + i)
}*/

/*let contenedor = document.getElementById("contenedor")
for(let i=0; i<5; i++){
  let parrafo = document.createElement("p")
  //parrafo.innerText = "Hola " + i
  parrafo.className = "col-3 danger"
  parrafo.innerHTML = `peligro ${i}`
  contenedor.appendChild(parrafo)
}

console.log("Fin")*/

const colores = ["azul", "rojo", "verde"]
console.log(colores[1])
console.log(colores[3])
colores[3] = "amarillo"
console.log(colores)
colores[4] = "fucsia"
console.log(colores)

for(let i=0; i<colores.length; i++){
  //console.log(colores[i])
  for(let j=0; j<colores[i].length; j++){
    console.log(colores[i][j])
  }
}