//Creamos el objeto mate
const mate= {};

//cambios realizados 12 octubre en git
//declaracion de funciones basicas
function sumar(a1,a2) {
    return a1 +a2;
}

function restar (a1,a2){
    return a1 -a2;
}

function multiplicar(a1,a2){
    return a1 * a2;
}

function dividir(a1,a2){
    
    if (a2==0){
        
        console.log("nose puede divir por cero");
        
    }
    else {
            return a1 / a2;
    }
    //return 
}

//para poder llamar las funciones desde otro archivo
//usaremos export



//exports.sumar= sumar;
//exports.multiplicar= multiplicar;
//exports.dividir= dividir;
// //exporta la propiedad de un objeto
//exports.restar=restar;

//mate.sumar = sumar;

//este es un objeto con multiples propiedades
//aqui agrego propiedades al objeto mate
mate.sumar=sumar;
mate.restar=restar;
mate.multiplicar=multiplicar;
mate.dividir=dividir;
module.exports=mate;

/*function hello(name){
    console.log('hola', name);

}
module.exports=hello;*/
