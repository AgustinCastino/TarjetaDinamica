let $nombreTarjeta = document.querySelector("#nombreTarjeta") 

let $nombre = document.querySelector("#nombre")
let $apellido = document.querySelector("#apellido")


$nombre.addEventListener("keyup", function(e){
    validarTecla($nombre,e)
})

$apellido.addEventListener("keyup", function(e){
    validarTecla($apellido,e)
})

// Los input nombre y apellido solo pueden tener letras.
function validarTecla($input,e){

    // Verifico si la tecla fue una letra
    let teclaValida = /[A-z]+/.test(e.key);

    // Si la tecla no fue una letra, corrigo la palabra borrando el caracter que no es letra
    if(teclaValida == false){
        let palabra = $input.value
        let palabraCorregida = ""

        for(let i = 0; i<palabra.length;i++){
            let caracterValido = /[A-z]+/.test($input.value[i])

            if(caracterValido == true){
                palabraCorregida += $input.value[i]
            }
            
        }

        $input.value = palabraCorregida
    }

    escribirTecla($input.className, $input.value)
}

// Escribe en la tarjeta
function escribirTecla(inputClassName, datoAEscribir){
    
    // Se utiliza el className ya que este es compartido entre el inpu y los datos de la tarjeta
    // De esta forma la misma funcion edita toda la informacion
    let $informacion = document.querySelector(`#tarjeta .${inputClassName}`)
    $informacion.innerText = datoAEscribir
}

