// EliezxRTS 
// kiosco.js
// Simula un kiosco con un menú de productos, permite agregar productos al carrito y muestra el total con IVA al finalizar.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar el menú
function mostrarMenu() {
  console.log("=== Kiosco FESA ===");
  console.log("1) Papas fritas ............ $17");
  console.log("2) Vaso de frutas .......... $25");
  console.log("3) Jugo de naranja ......... $30");
  console.log("4) Agua de Jamaica ......... $15");
  console.log("5) Torta de jamón .......... $25");
  console.log("\nEscribe 'codigo,cantidad' (ejemplo: 1,2). Escribe 'fin' para cobrar.\n");
}

// Carrito de compras
let carrito = [];

// Función que procesa la entrada del usuario
function procesarEntrada(entrada) {
  const [codigoStr, cantidadStr] = entrada.split(",");
  const codigo = parseInt(codigoStr);
  const cantidad = parseInt(cantidadStr);

  if (isNaN(codigo) || isNaN(cantidad) || cantidad <= 0) {
    console.log("Entrada inválida. Usa 'codigo,cantidad'.\n");
    return;
  }

  let nombre = "";
  let precio = 0;

  switch (codigo) {
    case 1:
      nombre = "Papas fritas";
      precio = 17;
      break;
    case 2:
      nombre = "Vaso de frutas";
      precio = 25;
      break;
    case 3:
      nombre = "Jugo de naranja";
      precio = 30;
      break;
    case 4:
      nombre = "Agua de Jamaica";
      precio = 15;
      break;
    case 5:
      nombre = "Torta de jamón";
      precio = 25;
      break;
    default:
      console.log("Código de producto no válido.\n");
      return;
  }

  carrito.push({ nombre, precio, cantidad });
  console.log(`Añadido: ${cantidad} x ${nombre} ($${precio} c/u) = $${precio * cantidad}\n`);
}

// Función para mostrar el resumen de compra
function mostrarResumen() {
  console.log("\n----------------- RESUMEN -----------------");
  let subtotal = 0;

  carrito.forEach((item) => {
    let totalItem = item.precio * item.cantidad;
    subtotal += totalItem;
    console.log(`${item.nombre.padEnd(20)} x${item.cantidad} = $${totalItem}`);
  });

  let iva = subtotal * 0.16;
  let total = subtotal + iva;

  console.log("------------------------------------------");
  console.log(`Subtotal            $${subtotal.toFixed(2)}`);
  console.log(`IVA (16%)           $${iva.toFixed(2)}`);
  console.log(`TOTAL               $${total.toFixed(2)}`);
  console.log("------------------------------------------");
  console.log("Gracias por su compra.");
}

// Bucle while(true)
async function main() {
  mostrarMenu();

  while (true) {
    const entrada = await new Promise((resolve) => rl.question("> ", resolve));

    if (entrada.toLowerCase() === "fin") {
      mostrarResumen();
      rl.close();
      break;
    }

    procesarEntrada(entrada);
  }
}

main();
