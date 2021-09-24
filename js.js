
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


/* class Persona {
    constructor(nombre, apellido, edad) {
      this.nambre = nombre;
      this.apellido = apellido;
      this.edad = Number((edad));
    }
    
}
  
  const baseDedatos = [];
  
  let inputValues = {
    nombre: '',
    apellido: '',
    edad:0,
    email: '',
    pais:''
  };
  
  const capturarInputValue = evento => {
    inputValues = {
      ...inputValues,
      [evento.target.name]: evento.target.value
    };
  };
  
  const enviarBaseDeDatos = evento => {
    evento.preventDefault();
  
    const persona = new Persona(inputValues.nombre, inputValues.apellido, inputValues.edad, inputValues['email'], inputValues.pais);
  
  
    baseDedatos.push(persona);
  
    console.log(baseDedatos);
  };
  
  const inputNombre = document.querySelector('input[name="nombre"]');
  const inputApellido = document.querySelector('input[name="apellido"]');
  const inputEdad = document.querySelector('input[name="edad"]')
  const inputEmail = document.querySelector('input[name="email"]');
  const inputPais = document.querySelector('input[name="pais"]');
  const btnEnviar = document.querySelector('.btn-enviar');
  
  inputNombre.addEventListener('input', capturarInputValue);
  inputApellido.addEventListener('input', capturarInputValue);
  inputEdad.addEventListener('input', capturarInputValue);
  inputEmail.addEventListener('input', capturarInputValue);
  inputPais.addEventListener('input', capturarInputValue);
  btnEnviar.addEventListener('click', enviarBaseDeDatos); 
  
  guardarLocalStorage();
  obtenerLocalStorage();

  function guardarLocalStorage(){
    let persona = {
        nombre: "",
        apellido: "",
        edad: 0,
        otrosdatos: {
            email: "",    
            pais: ""
        }
    };
    let nombre =""
    localStorage.setItem( "nombre", nombre );
    localStorage.setItem( "persona", JSON.stringify(persona) );
}

function obtenerLocalStorage(){

    if(localStorage.getItem("nombre")){

        let nombre = localStorage.getItem("nombre");
        console.log(nombre);
        let persona = JSON.parse(localStorage.getItem("persona"));
        console.log(persona);

    }else{
        console.log("no hay entradas en el local storage")
    }
} */
/////////////////////////////////////////////////////////////
//Ejercicio de crear las rutinas de ejercicios para el GYM
////////////////////////////////////////////////////////////
//Variables Globales
/* const formularioUser = document.querySelector('#formulario');
const listaActividadesUser = document.querySelector('#listaActividades');
let arrayActividades = [];
console.log(arrayActividades);

 */
//funciones
/* const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }
    arrayActividades.push(item);
    
    return item;
}

const GuardarLS = () => {

    localStorage.setItem('rutina', JSON.stringify(arrayActividades));
    
    PintarDom();
}

const EliminarLS = (actividad) => {
    let indexArray;
    arrayActividades.forEach((elemento, index) => {
        if(elemento.actividad === actividad){
            indexArray = index;   
        }
    });
    
    arrayActividades.splice(indexArray,1);
    GuardarLS();
}

const PintarDom = () => {
    
    listaActividadesUser.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem('rutina'));

    if(arrayActividades === null){
        arrayActividades = [];
    }else {
        arrayActividades.forEach(element => {
            listaActividadesUser.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons me-3 float-start">accessibility_new</i><b>${element.actividad}</b> - ${element.estado}<span class="float-end"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
        });
    }
} */

/* const EditarLS = (actividad) => {

    let indexArray = arrayActividades.findIndex((elemento)=>elemento.actividad === actividad);
    
    console.log(arrayActividades[indexArray]);

} */
//Eventlistener

/* formularioUser.addEventListener('submit', (e) => {

    e.preventDefault();
    let actividadUser = document.querySelector('#actividad__input').value;
    
    CrearItem(actividadUser);
    GuardarLS();

    formularioUser.reset();
});

document.addEventListener('DOMContentLoaded', PintarDom); //funcion o mas bien evento, que sirve para pintar todo lo que viene del local storage

listaActividadesUser.addEventListener('click', (e) => {

    e.preventDefault(); */
   //console.log(e.target.innerHTML); para poder visualizar todo el campo o dom de nuestro HTML al pinchar con el raton
   //tambien puedes utilizar mouseEvent para encontrar los nodechilds con console.log(e)
/* 
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let contenido = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'delete'){
        //accion de eliminar
        EliminarLS(contenido);
        }if(e.target.innerHTML === 'done'){
        EditarLS();

        }
    }
}); */

/* //////////////////////////////////////////////////////////////////////
//VALIDAR INPUT PASAR AL ARRAY Y TOMAR EL VALOR DE ESTOS PARA SER USADOS
//////////////////////////////////////////////////////////////////////
//Vamos a hacer un formulario simple que va a guasrdar los datos en un array
const arrayDeUsuarios = [];

//Creamos un objeto que va a tener las propiedades de los inputs. Estas propiedades tienen que llamarse EXACTAMENTE igual que el atributo name que tiene cada input en el HTML (ver html). Estas propiedades inician vacios
let inputValues = {
  nombre: '',
  apellido: '',
  edad: '',
  email: ''
};
 */
/* //Funcion handleForm que va a validar los inputs y los pasa al array
const handleForm = e => {
  e.preventDefault();

  //Validamos que los campos no esten vacios. Hay formas mas optimas de validar pero por ahora dejemoslo asi
  if (
    inputValues.nombre.trim() === '' ||
    inputValues.apellido.trim() === '' ||
    inputValues.edad.trim() === '' ||
    inputValues.email.trim() === ''
  ) {
    console.log('Todos los campos deben ser completados');
    return; //recuerden que este return lo ponemos para evitar que la funcion siga ejecutandose
  }

  //Si llega a este punto quiere decir que logró la validacion
  console.log('Antes de pushear los datos: ', arrayDeUsuarios);
  arrayDeUsuarios.push(inputValues);
  console.log('Despues de pushear los datos: ', arrayDeUsuarios);
};

const handleInput = e => {
  //Aqui viene lo "complejo", necesitamos hacer este formulario dinamico, como hacemos eso? capturando el e.target.name del elemento y buscar que coincida con alguna propiedad del objeto inputValues, es por eso que es importante que los nombres de las propiedades del objeto sean las mismas que la de los names en el html. Por ejemplo e.target.name del segundo input sera apellido, este entrara en el objeto y buscara una propiedad que sea igual, si la consigue le agregara el e.target.value que le pasamos

  console.log('Soy el input donde estas escribiendo: ', e.target);
  console.log('Soy el atributo value de ese input: ', e.target.value);
  console.log('Soy el atributo name de ese input: ', e.target.name);

  inputValues = {
    ...inputValues, //esos ... se llama spread operator, googlear! Va a devolver una copia del objeto, dejo comentado como se veria el objeto si no tuviera eso
    [e.target.name]: e.target.value
  };

  // inputValues = {
  //   [e.target.name]: e.target.value
  // }

  console.log(inputValues);
};

//Los llamados de los elementos y de los eventos lo hacemos en el window.onload, pero en este editor no se puede usar asi que lo hare normal

//llamamos el formulario
const form = document.querySelector('form');

//Llamamos a los inputs
const inputs = document.querySelectorAll('.input');

//hacemos el evento submit del form que va a ejecutar la funcion sendForm
form.addEventListener('submit', handleForm);

//hacemos el evento para capturar los values del input, pero como los inputs lo llamamos con un querySelectorAll tenemos que hacer una iteracion primero
inputs.forEach(input => input.addEventListener('input', handleInput));
 */

const btnNotify = document.getElementById("btnNotify");

btnNotify.addEventListener('click', function(){
    
    notify();

})

function notify(){
    //verificar que el navegador soporte notificaciones

    if (!("Notification" in window)) {

        alert('tu navegador no soporta notificaciones');

    }else if(Notification.permission === "granted"){

        //Lanzar notificacion si ya está autoriazado el servicio

        notificacion = new Notification("Mi primer notification")

    }else if(Notification.permission !== "denied"){

        Notification.requestPermission(function(){

            if(Notification.permission === "granted"){

               const notification = new Notification("Hola Mundo")

            }

        })

    }

}