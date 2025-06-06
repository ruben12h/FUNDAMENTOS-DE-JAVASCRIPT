//array es una estructura de datos que permiten almacenar varios valoresen una sola variable



let frutas = ['manzana','platano','naranja'];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

console.log(frutas.length);//longitud del array

for (let fruta of frutas ){
    console.log(fruta);
}

frutas[1] = 'pera';//remplaza el valor en la posicion 1

console.log(frutas);
console.log(typeof frutas);

let numeros = [1,2,3,4,5,6,7,8,9,10];

//remplazar un numero 3 por 33
numeros[3] = 33;

console.log(numeros);