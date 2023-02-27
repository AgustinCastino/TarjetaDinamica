let $nombreTarjeta = document.querySelector("#nombreTarjeta") 

let $nombre = document.querySelector("#nombre")
let $apellido = document.querySelector("#apellido")
let $color = document.querySelector("#color")


$nombre.addEventListener("keyup", function(e){
    validarTecla($nombre,e)
})

$apellido.addEventListener("keyup", function(e){
    validarTecla($apellido,e)
})

$color.addEventListener("keyup", function(e){
    validarColorHexadecimal($color, e)
    validarCantidadCaracteres($color)
})

// Los input nombre y apellido solo pueden tener letras.
function validarTecla($input,e){

    // Verifico si la tecla fue una letra
    let esLetra = /[A-z]+/.test(e.key);

    // Si la tecla no fue una letra, corrigo la palabra borrando el caracter que no es letra
    if(esLetra == false){
        let palabra = $input.value
        let palabraCorregida = ""

        for(let i = 0; i<palabra.length;i++){
            let caracterValido = /[A-z]+/.test(palabra[i])

            if(caracterValido){
                palabraCorregida += $input.value[i]
            }
        }
        $input.value = palabraCorregida
    }
    escribirTarjeta($input.className, $input.value)
}

function validarColorHexadecimal($input, e){
    // Verifico si la letra ingresada corresponde a sistema Hexadecimal
    let esColorHexadecimal = /^[0-9A-F]+$/.test(e.key.toUpperCase())

    // Si se ingresa un letra que no coincide con el sistema Hexadecimal, se borra
    if(esColorHexadecimal == false){
        let color = $input.value.toUpperCase()
        let colorCorregido = ""

        for(let i = 0; i<color.length; i++){
            let colorValido = /^[0-9A-F]+$/.test(color[i])

            if(colorValido){
                colorCorregido += $input.value[i]
            }
        }
        $input.value = colorCorregido
    }
}

// Si ya se ingresaron los 6 caracteres, se colorea la tarjeta
function validarCantidadCaracteres($input){
    let cantidadCaracteres = $input.value.length

    if(cantidadCaracteres == 6){
        let color = $input.value
        colorearTarjeta(color)

    }

}

function colorearTarjeta(color){
    let tarjeta = document.querySelector("#tarjeta")
    tarjeta.style.backgroundColor = "#" + color
}

// Escribe en la tarjeta
function escribirTarjeta(inputClassName, datoAEscribir){
    
    // Se utiliza el className ya que este es compartido entre el inpu y los datos de la tarjeta
    // De esta forma la misma funcion edita toda la informacion
    let $informacion = document.querySelector(`#tarjeta .${inputClassName}`)
    $informacion.innerText = datoAEscribir
}

