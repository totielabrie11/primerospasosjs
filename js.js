
/* let nombre = "carlos"
let edad = 37;
let estadoCivil = "soltero"; */


let nombre = prompt("ingrese su nombre");
console.log(nombre);

let edad = prompt("ingrese su edad");
edad = parseInt(edad); //para este caso, me sirve mas ParseInt  Number
console.log(edad);

let estadoCivil = prompt("ingrese su estaod civil");
console.log(estadoCivil);


if (edad >= 18 && estadoCivil == ("soltero" || "soltera")) { 
    alert("Bienvenido " + nombre + " estas autorizado a ingresar a este contenido " + " con el fin de que dejes de ser " + estadoCivil)
} else if (edad >= 18 && estadoCivil == ("casado" || "casada")) {
    alert("puedes ingresar " + nombre + " a ver el contenido, bajo tus propios riesgos")
}
 else {
    alert("hola " + nombre + " No reunes los requisitos para ingresar a este sitio")
}


