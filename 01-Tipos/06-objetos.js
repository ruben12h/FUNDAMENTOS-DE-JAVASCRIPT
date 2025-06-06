let nombre = 'tanjiro';
let anime = 'kimetsu no yaiba';
let edad = 15;

let personaje = {//objecto
    nombre: nombre,
    anime: anime,
    edad: edad,
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 16;
//personaje['edad']=17;

delete personaje.edad;
console.log(personaje);