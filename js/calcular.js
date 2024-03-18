// inputs

const formCal= document.querySelector("#formCal");
console.log(formCal)
const inputs= document.querySelectorAll("input");
console.log(inputs)
const montoD= inputs[0]
console.log(montoD)
const cuotasD= inputs[1]
console.log(cuotasD)
const calcular= inputs[2]
console.log(calcular)


// funcion calcular credito

function calcularCredito(){
  const res= document.querySelector("#respuesta")
  
  let monto= montoD.value
  let cantidad= cuotasD.value
  let interes= 2.5;
  let interesCuota= interes * cantidad;
  monto= parseFloat(monto);
  interes= parseFloat(interes);
  cantidad= parseFloat(cantidad);
  interesCuota= parseFloat(interesCuota);
  let resultado= monto * interesCuota / 100 + monto
  let cuotas= resultado / cantidad;
  res.innerHTML= " Por el monto ingresado abonara " +  cantidad + " cuotas de $" + Math.round(cuotas);
 
 }
          


  // evento
  
  formCal.addEventListener("submit", (e) => {
    e.preventDefault()
     calcularCredito()
   

  })
      
      