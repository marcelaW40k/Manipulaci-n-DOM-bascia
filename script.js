
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const  pResulr  = document.querySelector('#result')
const form = document.querySelector('#form')


//btn.addEventListener("click", btnOnclick)
//function btnOnclick() {
  //  const sumaInputus = input1.value + input2.value;
   // pResulr.innerHTML = "Ressultado: " + sumaInputus;
//}

form.addEventListener("submit", sumarInputValues)

function sumarInputValues(event) {
    event.preventDefault()
  const sumaInputus = input1.value + input2.value;
   pResulr.innerHTML = "Ressultado: " + sumaInputus;
}