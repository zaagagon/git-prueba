//prueba en la nube de git
//importar el archivo mate que contiene las funciones
// todo lo importado quedara en la constante mate
const mate=require ('./mate.js');
//imprime el contenido de la constante mate que contiene un objeto
console.log(mate);


// como estoy exportando las funciones
//ahora debo instanciarla en console
//console.log(sumar(34,8));
console.log(mate.sumar(34,8));
console.log(mate.multiplicar(10,8));
console.log(mate.dividir(360,4));
console.log(mate.restar(120,75));
