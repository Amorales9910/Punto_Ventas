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
        var usuarioregex,pwdregex ;
        usuarioregex = /^\w+([a-zA-Z0-9-_]?\w+)+$/
        pwdregex = /^\w+([a-zA-Z0-9-_]?\w+)+$/ 
        let entrar = true
        if (!usuarioregex.test(a)){
            Swal.fire(
                'campo invalido',
                'este campo solo puede tener numeros ,letras , gion bajo',
                'info'
            )
             entrar = false 
        }
        if (!pwdregex.test(b)){
            Swal.fire(
                'campo invalido',
                'este campo solo puede tener numeros ,letras , gion bajo',
                'info'
            )
             entrar = false 
        }

        if (entrar===true){
            console.log ("validando") ;
            //codigo de login
            var datos = new FormData();
            datos.append('usuario',a);
            datos.append('password',b);
            var ajax = new XMLHttpRequest();
            ajax.open('POST','partials/login_back.php',true);
            //esperamos la respuesta de php
            ajax.onload= function(){
                if (this.status === 200){
                    console.log(JSON.parse(ajax.responseText)); 
                }
            ajax.send(datos);
            }

        } else {
            Swal.fire(
                'error',
                'revisa tus credenciales',
                'error'
            )
        }

    }

}