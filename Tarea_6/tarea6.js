const dropzone = document.getElementById("dropzone");
const botonReiniciar = document.getElementById("reiniciar");

// Guardamos el HTML original del dropzone para restaurarlo al reiniciar
const htmlDropzoneOriginal = `
  <h4 id="avisos">Arrastra un número aquí</h4>
  <h4 id="intentos">Cuentas con 3 intentos</h4>
`;

botonReiniciar.addEventListener("click", reiniciarJuego);

// Variables de juego iniciales
let intentosInicial = 3;
let ganar = false;
let numeroSolucion = Math.floor(Math.random() * 10) + 1;

console.log("Solución:", numeroSolucion);

// Inicializar dragstart en las piezas
function inicializarPiezas() {
  document.querySelectorAll(".divNumero").forEach(divNumero => {
    divNumero.addEventListener("dragstart", evt => {
      evt.dataTransfer.setData("text/plain", divNumero.innerText);
    });
  });
}

// Inicializar dragover y drop en dropzone para mover las piezas
function inicializarDropzone() {
  dropzone.addEventListener("dragover", evt => evt.preventDefault());

  dropzone.addEventListener("drop", evt => {
    evt.preventDefault();
    const divNumeroId = evt.dataTransfer.getData("text/plain");
    const divNumero = document.getElementById("divNumero" + divNumeroId);
    if (!divNumero) return;

    const { left: fLeft, top: fTop, width: fW, height: fH } = divNumero.getBoundingClientRect();
    const { left: dLeft, top: dTop, width: dW, height: dH } = dropzone.getBoundingClientRect();

    const translateX = dLeft + dW/2 - (fLeft + fW/2);
    const translateY = dTop + dH/2 - (fTop + fH/2);

    divNumero.style.transition = "transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)";
    divNumero.style.transform = `translate(${translateX}px, ${translateY}px)`;

    setTimeout(() => {
      divNumero.style.display = "none";

      // Actualizar avisos e intentos después de la animación
      const avisos = document.getElementById("avisos");
      const intentos = document.getElementById("intentos");

      const numero = parseInt(divNumeroId);
      (intentosInicial === 0 || ganar) 
        ? avisos.innerText = "Juego terminado" 
        : revisarMovimiento(numero, avisos, intentos);
    }, 500);
  });
}

// Lógica de juego y actualización de avisos e intentos si gana o pierde
function revisarMovimiento(numero, avisos, intentos) {
  if (numero < numeroSolucion) {
    avisos.innerText = "Estoy pensando un número mayor que " + numero;
  } else if (numero > numeroSolucion) {
    avisos.innerText = "Estoy pensando un número menor que " + numero;
  } else {
    avisos.innerText = "¡CORRECTO! Mi número era " + numeroSolucion;
    ganar = true;
    evtWin();
    return;
  }
  intentosInicial--;
  intentos.innerText = "Intentos restantes: " + intentosInicial;
  if (intentosInicial === 0 && !ganar) {
    avisos.innerText = "¡HAS PERDIDO! Mi número era " + numeroSolucion;
    evtLose();
    return;
  }
}

// Animaciones de dropzone al ganar o perder
function evtWin() {
  const intentos = document.getElementById("intentos");
  intentos.style.display = "none";
  dropzone.classList.remove("lose");
  dropzone.classList.add("win");
  setTimeout(() => dropzone.style.transform = "scale(1)", 500);
}

function evtLose() {
  const intentos = document.getElementById("intentos");
  intentos.style.display = "none";
  dropzone.classList.remove("win");
  dropzone.classList.add("lose");
  setTimeout(() => dropzone.style.transform = "scale(1)", 500);
}

// Reinicio del juego con animación de rebote en dropzone
function reiniciarJuego() {
  // Nuevo número secreto y reinicio de variables de juego
  numeroSolucion = Math.floor(Math.random() * 10) + 1;
  intentosInicial = 3;
  ganar = false;

  // Restaurar dropzone a estado original
  dropzone.innerHTML = htmlDropzoneOriginal;
  dropzone.className = "rounded-pill d-flex flex-column dropzone";

  // Rebote de transición en dropzone al reiniciar
  dropzone.style.transform = "scale(1.1)";
  setTimeout(() => dropzone.style.transform = "scale(1)", 150);

  // Restaurar avisos e intentos
  const avisos = document.getElementById("avisos");
  const intentos = document.getElementById("intentos");
  avisos.innerText = "Arrastra un número aquí";
  intentos.style.display = "block";
  intentos.innerText = "Cuentas con 3 intentos";

  // Animación de reaparecer piezas
  document.querySelectorAll(".divNumero").forEach(pieza => {
    pieza.style.display = "flex";
    pieza.style.opacity = "0";
    pieza.style.transform = "translate(0,0) scale(0.5)";
    pieza.getBoundingClientRect(); // fuerza reflow
    pieza.style.opacity = "1";
    pieza.style.transform = "translate(0,0) scale(1)";
  });

  console.log("Juego reiniciado. Nuevo número secreto:", numeroSolucion);
}

// Inicializamos eventos al cargar la página por primera vez
inicializarPiezas();
inicializarDropzone();