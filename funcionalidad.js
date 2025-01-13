let inputActual = document.querySelector(".input-actual");
let numero1 = document.querySelector(".numero1");
let numero2 = document.querySelector(".numero2");
let input = true;
let inputResultado = document.querySelector(".inputResultado");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn0 = document.querySelector(".btn0");
let btnPunto =  document.querySelector(".btnPunto");
let btnMas = document.querySelector(".btnMas");
let btnMenos = document.querySelector(".btnMenos");
let btnMult = document.querySelector(".btnMult");
let btnDiv = document.querySelector(".btnDiv");
let btnPorcent = document.querySelector(".btnPorcent");
let btnContinuar = document.querySelector(".btnContinuar");
let btnCA = document.querySelector(".btnCA");
let btnC = document.querySelector(".btnC");
let resultado = 0,num1,num2;
let operador = "";
let eventoAgregado = false;
let divisionInvalida = false;
let seleccionarInput = () => {
    if(eventoAgregado){
        inputResultado.value = resultado;
        numero1.value = "";
        numero2.value = "";
    }else if(!eventoAgregado){
        inputResultado.value = resultado;
        numero1.value = resultado;
        numero2.value = "";
    }
}
const operaciones = {
    suma: (num1, num2) =>{
        resultado = num1 + num2;
        seleccionarInput();
    },
    resta: (num1, num2) =>{
        resultado = num1 - num2;
        seleccionarInput();
    },
    multiplicacion: (num1, num2) =>{
        resultado = num1 * num2;
        seleccionarInput();
    },
    division: (num1, num2) =>{
        if(divicionInvalida){
            inputResultado.value = "";
            divisionInvalida = false;
        }else{
            resultado = num1 / num2;
            seleccionarInput();
        }
        
    },
    porcentaje: (num1, num2) => {
        resultado = num2 / num1;
        seleccionarInput();
    }
}
// Switch para cambiar propiedad input-actual, al ultimo input pulsado.
let  inputUno = () => {
    eventoAgregado = true;
    if(input){
        if(numero2.classList.contains("input-actual")){
            numero2.classList.remove("input-actual");
            numero1.classList.add("input-actual");
        }else{
            numero1.classList.add("input-actual");
        }
    }
    input = false;
}
numero1.addEventListener("click", inputUno)

numero2.addEventListener("click", () => {
    if(input){
        numero2.classList.add("input-actual")
        numero1.classList.remove("input-actual");
        input = true;
    }
    
    if(input == false){
        if(numero1.classList.contains("input-actual")){
            numero1.classList.remove("input-actual");
            numero2.classList.add("input-actual");
        }else{
            numero2.classList.add("input-actual");
        }
    }
    input = true;
})

let funcionContinuar = () => {
    
    if(operador == ""){
        alert("¡Por el momento no puedes realizar esta acción!")
    }else{
    numero1.setAttribute("readonly", true); 
    numero1.removeEventListener("click", inputUno);
    numero2.classList.add("input-actual")
    numero1.classList.remove("input-actual");
    numero1.value = resultado;
    inputResultado.value = "";
    eventoAgregado = false;
    }
}


function botonCA(){
    if(!eventoAgregado){
        numero1.addEventListener("click", inputUno);
        eventoAgregado = true;
    }
    numero1.removeAttribute("readonly");
    inputResultado.value = "";
    resultado = "";
    numero1.value = "";
    numero2.value = "";
    operador = "";
}

agregarNumero = numero =>{
    let inputactual = document.querySelector(".input-actual");
    inputactual.value += numero;
}

// Función de continuar


btnContinuar.addEventListener("click", funcionContinuar);


// Botones C, CA, IGUAL Y NÚMEROS

btnC.addEventListener("click", botonC)
btnCA.addEventListener("click", botonCA)

btn1.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("1")
})

btn2.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("2")
})

btn3.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("3")
})

btn4.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("4")
})
btn5.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("5")
})
btn6.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("6")
})
btn7.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("7")
})
btn8.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("8")
})
btn9.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero("9")
})
btn0.addEventListener("click", ()=>{
    inputActivo()
   agregarNumero("0");
})

btnPunto.addEventListener("click", ()=>{
    inputActivo()
    agregarNumero(".");
   
})
// btnContinuar.addEventListener("click", ()=>{
//     inputActivo()
//     inputActual.value += ".";
//     agregarNumero(".");
   
// })


// OPERADORES
let validacion = () =>{
    num1 = numero1.value;
    num2 = numero2.value;
    if(num1 == NaN || num1 == "" ){
     num1 = 0;
    }
    if(num2 == NaN || num2 == ""){
     num2 = 0
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(operador == "/" && num2 == 0){
        alert(`No se puede dividir por 0`)
        divicionInvalida = true;
    }
}

btnMas.addEventListener("click", ()=>{
    operador = "+";
   validacion();
//    alert(`num1: ${num1}, num2: ${num2}`)
   operaciones.suma(num1, num2); 
})

btnMenos.addEventListener("click", () => {
    operador = "-";
    validacion();
    operaciones.resta(num1, num2);
})

btnMult.addEventListener("click", () =>{
    operador = "*";
    validacion();
    operaciones.multiplicacion(num1, num2);
})
btnDiv.addEventListener("click", () => {
    operador = "/";
    validacion();
    operaciones.division(num1, num2);
})
btnPorcent.addEventListener("click", () =>{
    operador = "%";
    validacion();
    operaciones.porcentaje(num1 , num2);
})
// Validar si hay un input activo
function inputActivo(){
    //                       true                                                false
    if(numero1.classList.contains("input-actual") == false && numero2.classList.contains("input-actual") == false){
        alert(`Selecciona la casilla donde se van a ingresar los primeros digítos`)
    }else{

    }

    // if(numero1.classList.contains("input-actual") || numero2.classList.contains("input-actual")){

    // }else{
    //     alert("Selecciona la casilla donde se van a ingresar los primeros digítos");
    // }
}


function botonC(){
    let nuevo
    if(numero1.classList.contains("input-actual")){
        nuevo = numero1.value.replace(/.$/, "");
        numero1.value = nuevo;
    }else if(numero2.classList.contains("input-actual")){
        nuevo = numero2.value.replace(/.$/, "");
        numero2.value = nuevo;
    }else{
        alert("No puedes realizar esta acción")
    }
    // replace con expresión regular: la esprecion regular /.$/ coincide con el último caracter de la cadena, .$ coincide con cualquier caracter, y el $ indica el final de la cadena. Luego, se reemplaza por una cadena vacia ""
    // Las cadenas en js son inmutables, no puedes modificar directamente una cadena existente. en su lugar, debes crear una nueva cadena con los cambios deseados.
}


 
 