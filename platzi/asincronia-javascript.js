// Uso de callback

function date(callback) {
    console.log(new Date)       // se genera la primer fecha antes del settimeout
    setTimeout(function () {
        let date = new Date     // variable que almacenara la segnda fecha en el timeout
        callback(date)          //la función que se le pasara como parametro el...
    }, 3000)                    //valor de la la variable declarada arriba "que es una fecha"
}                               //y asu vez callback es en realidad printDate la función de abajo

function printDate(dateNow) {   //esta función solo manda a imprimir la fecha que tenemos en la variable let date de arriba
    console.log(dateNow)        //y es el callback en realidad
}

date(printDate)


/**
 * Aqui la promesa se ejecuta al cargar el archivo
*/
const somethingWillHapped = new Promise( (resolve, reject) => {
    if (true) {
        console.log('Hey dude!');
        resolve('Hey!');
    } else {
        reject('Whoops!');
    }
});

/**
 *Aqui la promesa no se ejecuta hasta que se llame a la funcion
*/
const somethingWillHapped = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            console.log('Hey dude!');
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}


