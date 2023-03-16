const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;

let operacion = prompt("ingrese que operacion le gustaria realizar \"sumar-restar-multiplicar-dividir\"").toLowerCase()

  while (operacion != "esc") {
      let primerNumero = Number(prompt("ingrese un Numero"))
      let segundoNumero = Number(prompt("ingrese otro Numero"))

     if (operacion == "sumar") {
          let resultado = sumar(primerNumero,segundoNumero)
          alert(resultado)
         
         }else if(operacion == "restar") {
             let resultado = restar(primerNumero,segundoNumero)
             alert(resultado)
         }
         else if(operacion == "multiplicar") {
             let resultado = multiplicar(primerNumero,segundoNumero)
             alert(resultado)
         }
         else if (operacion == "dividir") {
             let resultado = dividir(primerNumero,segundoNumero)
             alert(resultado)
         }
     operacion = prompt("ingrese otra operacion, caso contrario esciba ESC").toLowerCase()
 }


    