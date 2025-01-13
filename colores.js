let botones = document.querySelectorAll(".botonColor");
let calculadora = document.querySelector(".calculadora");
let operadores = document.querySelector(".azul");
let inputsNumeros = document.querySelectorAll(".inputNumeros");
let botonesOperadores = document.querySelectorAll(".operador");
let colorInput = "", colorOperador = "";
let funcionOperador = () =>{
    botonesOperadores.forEach((operador) => {
        if(colorOperador === "verde"){
            // Verde
            operador.classList.add("verde");
            operador.classList.remove("rojo");
            operador.classList.remove("azul");
        }else if(colorOperador === "rojo"){
            // rojo
            operador.classList.add("rojo");
            operador.classList.remove("verde");
            operador.classList.remove("azul");
        }else if(colorOperador === "azul"){
            // azul
            operador.classList.add("azul");
            operador.classList.remove("rojo");
            operador.classList.remove("verde");
        }
    })
}
let funcionInputs = () =>{
    inputsNumeros.forEach((input)=>{
        if(colorInput === "verde"){
            input.classList.add("inputVerde");
            input.classList.remove("inputAzul");
            input.classList.remove("inputRojo");
        }else if(colorInput === "rojo"){
            input.classList.add("inputRojo");
            input.classList.remove("inputAzul");
            input.classList.remove("inputVerde");
        }else if(colorInput === "azul"){
            input.classList.add("inputAzul");
            input.classList.remove("inputRojo");
            input.classList.remove("inputVerde");
        }
    })
}



 let colorVerde = () => {
    if(calculadora.classList.contains("sectionAzul")){
        calculadora.classList.add("sectionVerde");
        calculadora.classList.remove("sectionAzul");
        colorInput = "verde";
        funcionInputs();
        colorOperador = "verde"
        funcionOperador();
    }else if(calculadora.classList.contains("sectionRojo")){
        calculadora.classList.add("sectionVerde");
        calculadora.classList.remove("sectionRojo");
        colorInput = "verde";
        funcionInputs();
        colorOperador = "verde"
        funcionOperador();
    }
 }
let colorRojo = ()=>{
    if(calculadora.classList.contains("sectionAzul")){
        calculadora.classList.add("sectionRojo");
        calculadora.classList.remove("sectionAzul");
        colorInput = "rojo";
        funcionInputs();
        colorOperador = "rojo"
        funcionOperador();
    }else if(calculadora.classList.contains("sectionVerde")){
        calculadora.classList.remove("sectionVerde");
        calculadora.classList.add("sectionRojo");
        colorInput = "rojo";
        funcionInputs();
        colorOperador = "rojo"
        funcionOperador();
    }
    }
let colorAzul = () =>{
    if(calculadora.classList.contains("sectionVerde")){
        calculadora.classList.add("sectionAzul");
        calculadora.classList.remove("sectionVerde");
        colorInput = "azul";
        funcionInputs();
        colorOperador = "azul"
        funcionOperador();
    }else if(calculadora.classList.contains("sectionRojo")){
        calculadora.classList.remove("sectionRojo");
        calculadora.classList.add("sectionAzul");
        colorInput = "azul";
        funcionInputs();    
        colorOperador = "azul" 
        funcionOperador();   
    }}

botones.forEach((boton) =>{
   if(boton.classList.contains("botonRojo")){
    //  función boton rojo
    boton.addEventListener("change", colorRojo)
   }else if(boton.classList.contains("botonVerde")){
    boton.addEventListener("change", colorVerde)
    // funcion boton verde
   }else{
    // funcion boton azul
    boton.addEventListener("change", colorAzul )
   }
})