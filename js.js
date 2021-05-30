
/* let nombre = "carlos"
let edad = 37;
let estadoCivil = "soltero"; */


let nombre = prompt("ingrese su nombre");
console.log(nombre);

let edad = prompt("ingrese su edad");
edad = parseInt(edad); //para este caso, me sirve mas ParseInt  Number
console.log(edad)

let estadoCivil = prompt("ingrese su estaod civil")
console.log(estadoCivil)

let alerta = alert("Gracias " + nombre + " por tu respuesta, Tu tienes " + edad + " años y te encuentras actualmente " + estadoCivil);



