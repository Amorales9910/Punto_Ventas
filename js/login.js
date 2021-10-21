//probamosx la conexion de js
console.log("conectado");
//creamos variables
var a,b ;
//creamos el escuchador
document.querySelector("#formulario").addEventListener('submit',ejecutar);
//creamos la funcion
function ejecutar (e){
    //evitamos la recarga de la pagina
    e.preventDefault();
    //prueba del boton
    console.log (" haz dado click ") ;
    //tomamos los valores de las cajas de texto  
    a=document.querySelector("#usuario").value;
    b=document.querySelector("#password").value;
    /*console.log("el usuario que ingresaste es " + a);
    console.log("la contraseña es :" + b) ;*/ 
    //alerta de campos vacios
    if (a===''||b===''){
        Swal.fire(
            'error',
            'llena los campos vacios',
            'error'
        )
        //los campos estan llenos
    } else{
        //console.log ('correcto');
    }

}