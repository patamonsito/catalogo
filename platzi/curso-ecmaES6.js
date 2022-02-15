//ES6
// funciones con parametros por defecto
function a(a = '1'){}

//Escribir variables de forma mas amigable en script
var a = 'hola';
var b = 'world';
var c = `${a} ${b}`;

//salto de linea amigable
var a = `este es un
salto de linea`

//variables de json extraer

var a = {name: 'luis'};

var { name } = a;

//Unir varios array en 1 solo
var a = [1, 2, 3]
var b = [4, 5, 6]
var c = [0, ...a, ...b]

//asignar por defecto el valor de un json con solo crear la palabra
let CodigoImportadora = '101001';
let Descripcion = 'Culata';

let json = {CodigoImportadora, Descripcion}

//funcion flecha
var item = [{name: 'luis', age: '28'}, {name: 'janis', age: '18'}]

var nombres = item.map(e => console.log(e.name));

var funcion = e => e * e; //multiplicar ese valor por el mismo


//Promesas:
//https://static.platzi.com/media/user_upload/promesas%20y%20arrow-1c9f187c-8225-407b-955c-8ddcf7c55e1a.jpg

//Class Constructor
class Calculadora {
    constructor(){
        this.a = 0;
        this.b = 0
    }
    suma(a, b){
        this.a = a;
        this.b = b;
        return a + b;
    }
}
var c = new Calculadora()
c.suma(2, 2)


import { nextTick } from 'vue/types/umd';
//Importar variables o funciones desde otro archivo
import { hello } from './ejemplo'
hello();

//Algoritmos como funcion
// funcion* yield next();

// ES7

//los arrays ahora tienen includes que reemplaza al indexof para saber si existe o no en el array
var array = [1, 2, 3, 4, 5]
array.includes(6)  // return false
array.includes(5) // return true


//potencias:
let base = 4;
let exponent = 4;
let result = base ** exponent;
console.log(`Result -> ${result}`);

//Convertir json a arrays con y sin su parametro
//Object entries deveule los valores de una matriz.
const data ={
    front:'Alej',
    back: 'Rel'
};

//Tranformar este objeto en una matriz (array con parametros y valores). 
const entries = Object.entries(data);
console.log(entries); // return ['front', 'alej', 'back', 'rel']
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);
// /Objetc Values: Me devuelve los valores de un objeto a un arreglo. (solo valores)
const values = Object.values(data);
console.log(values); // return ['alej', 'rel']

// Colocar al comienzo o al final de una string mas texto
const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'

//Async await

var a = async () => {
    try {
        var a = await miau();
        return a;
    } catch (error) {
        console.log(error.response)
    }
}

//ES9

//Encapsula el resto de los datos si no los voy a ocupar de un json
var a = {name: 'luis', country: 've', age: '28'};

var { name, ...all } = a; // return name: luis {country: 've', age: '28'}

//unir 2 json 

var a = {name: 'luis', country: 've', age: '28'};

var b = {
    ...a,
    extra: 'miau'
}

console.log(b) //return {name: 'luis', country: 've', age: '28', extra: miau}


/**
 * Promise Finally
 */
 const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));


/**
 * Regex
 */
 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const match = regexData.exec('2018-04-28');
 const year = match[1];
 const month = match[2];
 const day = match[3];
 console.log('Date -> ', year, month, day);

 //--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to json obteniendo el primer argumento como nombre y el segundo como valor
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);


//ES11

//dynamic import: podremos realizar importacion dinamica de piezas de codigo
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello();
})

//archivo ./file.js
export function hello() {
    console.log('hola mundo');
}


//tambien sirve para cargar funciones cuando sea necesario
if (true) {
    import('./ejemplo.js').then((module) => {
      module.myFunction();
    });
  }

// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// 🤝 Promise All Settled

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}


// ES12

// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');

//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    {...}
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

//Replaceall para versiones anterioes:
const replacedString2 = string.replace(/Javascript/g, "Python");


// for reemplazado por of

for(i = 0; i < array.length; i++){}
for(i of array){}

//propiedad en los objetos for
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


