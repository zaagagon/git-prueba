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

exports.sumar= sumar;
exports.multiplicar= multiplicar;
exports.dividir= dividir;
exports.restar=restar;