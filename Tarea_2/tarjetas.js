let base = document.getElementById("base")

const colores = ["primary", "secondary", "info"]
const colores_boton = ["success", "danger", "warning"]
const colores_boton2 = ["dark", "secondary"]

//          <h5 class="card-title bg-${i%3==0?"primary":i%3==1?"success":"danger"}">Title ${i}</h5>

for(let i = 0; i<9; i++){
  let tarjeta = document.createElement("div");
  tarjeta.className = "card col-3 m-1 mb-2"
  tarjeta.innerHTML=`
        <div class="card-body">
          <img src="https://t4.ftcdn.net/jpg/14/09/17/57/360_F_1409175783_DbNZzHw2n47x853BtZn0ImcIe6Ge8P4z.jpg" class="card-img-top" alt="...">
          <h5 class="card-title bg-${colores[i%3]}">Title ${i}</h5>
          <p class="card-text bg-${colores_boton[i%3]}">Contenido ${i}</p>
          <a href="#" class="btn btn-${colores_boton2[i%2]}">Ir ${i}</a>
        </div>
    `;
  base.appendChild(tarjeta)
}