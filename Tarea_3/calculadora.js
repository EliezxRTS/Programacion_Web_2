function calcular2(a, b, callback) { return callback(a, b); }

const $op1 = document.getElementById("op1");
const $op2 = document.getElementById("op2");
const $res = document.getElementById("resultado");

function getNumeros() {
  const a = parseFloat($op1.value);
  const b = parseFloat($op2.value);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Ingresa ambos números");
  }
  return { a, b };
}

function operar(callback) {
  try {
    const { a, b } = getNumeros();
    const r = calcular2(a, b, callback);
    $res.value = r;
  } catch (e) {
    $res.value = e.message;
  }
}

document.getElementById("btnsuma").addEventListener("click", () => operar((x, y) => x + y));
document.getElementById("btnresta").addEventListener("click", () => operar((x, y) => x - y));
document.getElementById("btnmulti").addEventListener("click", () => operar((x, y) => x * y));