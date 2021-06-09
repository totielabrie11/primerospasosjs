
/* let nombre = "carlos"
let edad = 37;
let estadoCivil = "soltero"; */


/* let nombre = prompt("ingrese su nombre");
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
} */

//var amigos = ["carlos", "tito", "pichiman",];
//var amigos1 = ["totielabrie", "pocha", "angie", "soledad"];
//var amigos2 = amigos.concat(amigos1); // para concatenar una cadena de texto de un arraid , asignara un valor por unidad
    //amigos2.push("aaron", "loco", "ezequiel");
    
    //document.write("Estos son todos tus amigos: " + amigos2.join(" / ") + " que suman un total de " + amigos2.length + " amigos");
    //document.write("Estos son todos tus amigos " + amigos2 + " que suman un total de " + amigos2.length + " amigos");
    //amigos2.join() le agrega un separador entre cada elemento
    //amigos2.lenght suma la cantidad de elementos y devuelve el valor = cantidad
/* var edad = 20
var DiasDeSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
DiasDeSemana.length
console.log(DiasDeSemana)

for ( i = 0; i <= DiasDeSemana.length - 1; i++ ) {    //ciclo for
    document.write( DiasDeSemana[i] + "<br><br>");
} */


/* var DiasDeSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var NumeroDias = DiasDeSemana.length - 1;
var i = 0;

while (i <= NumeroDias) {
    document.write( DiasDeSemana[i] + "<br><br>");   //ciclo while
    i++;
} */

/* let confirmacion = confirm("Desea conocer que tipo de triangulo es el suyo");
    if (confirmacion) {
        let lado1 = parseFloat(prompt("Ingrese el angulo del primero lado del triangulo"));
        console.log (lado1);
        let lado2 = parseFloat(prompt("Ingrese el angulo del segundo lado del triangulo"));
        console.log (lado2);
        let lado3 = parseFloat(prompt("Ingrese el angulo del tercer lado del triangulo"));
        console.log (lado3);
        if ((lado1 === lado2) && (lado2 === lado3) && (lado3 === lado1)){
            alert("su triangulo es Equilatero");
        } else if ((lado1 !== lado2) && (lado1 !== lado3) && (lado3 !== lado2)){
            alert("su triangulo es Escaleno")
        } else alert("Su triangulo es Isoceles")      
    } */

/* var suma = function(numero1 , numero2){
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    
    var resultado = numero1 + numero2;
    return resultado;
} */



/* let nombre = prompt("ingrese su nombre");   //bot con switch - no acepta condicional pero acepta valor y si hay conicidencia lo valida o pasa al que sigue. al meterlo en un while siempre vuelve a preguntar para validar un valor;
let msj

while (msj !=="chau") {
    msj = prompt("ingrese un mensaje");

    switch (msj) {
        case "hola":
            alert("hola " + nombre);
            break
        
        case "fecha":
            alert(new Date().toLocaleString());
            break;

        case "chau":
            alert("Hasta luego " + nombre);
            break;
        
        default: 
          alert("mensaje invalido")
    }
} */

//Hacer una encuesta a 5 personas de los temas de abajo usando todo lo aprendido.
// Nombre
// Sexo: Varones/mujeres. (Si alguien quiere sumar generos no binarias tambien puede)
// Educacion: Secundaria/terciaria/universitaria/
// Trabaja: si/no
// En caso de trabajar: sueldo
// La encuesta debera mostrar por consola los resultados finales que seran:
// Cantidad de varones, cantidad de mujeres.
// Sueldo promedio de varones y sueldo promedio de mujeres
// Cuantos tienen secundaria, cuantos terciaria y cuantos univeristaria
// Nombre del mayor sueldo y del menor sueldo
// Aca no solo se usan los temas vistos sino, que se pone a prueba la logica de cada uno. Importante hacer una programacion limpia y ordenada.
// Ayuda spoiler:
// Se tienen que declarar variables para los resultados e ir guardando la informacion de cada dato.
// Se tienen que hacer las 5 preguntas 5 veces, una para cada encuestado.
// Despues de cada respuesta se hacen los calculos y se actualizan las variables declaradas como globales para los resultados.


  
let nombre = prompt("ingrese su nombre");
console.log(nombre);
let mensajeus; 
let tipoDeProceso;

while ((mensajeus !=="ESQ") || (tipoDeProceso !=="vacio") (tipoDeProceso !=="dosificacion")) {
    

let tipoDeProceso = prompt("Hola Que tipo de proceso vas a realizar 1) Dosificación    2) Vacio")
console.log(tipoDeProceso);

if (tipoDeProceso == ("dosificacion" || "dosificación" || "Dosificacion" || "Dosificación")) {
    tipoDeProceso = "dosificacion"
    console.log(tipoDeProceso)
    alert("Perfecto " + nombre + " bienvenido al selector inteligente para bombas de dosificación");
    }else if (tipoDeProceso == ("vacio" || "vacío" || "2" || "2)")){
    tipoDeProceso = "vacio"
    console.log(tipoDeProceso)
    alert("Perfecto " + nombre + " bienvenido al selector inteligente para bombas de vacio");
    }else {
    alert("Lo lamento " + nombre + " no has ingresado datos correctos, vuelva a intentar");
    mensajeus = prompt("ingrese ESQ para salir o enter para continuar") ;
    }
}
