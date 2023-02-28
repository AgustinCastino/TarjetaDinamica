let $nombreTarjeta = document.querySelector("#nombreTarjeta") 

let $nombre = document.querySelector("#nombre")
let $apellido = document.querySelector("#apellido")
let $colorTarjeta = document.querySelector("#colorTarjeta")
let $colorCaracteres = document.querySelector("#colorCaracteres")



$nombre.addEventListener("keyup", function(e){
    validarTecla($nombre,e)
})

$apellido.addEventListener("keyup", function(e){
    validarTecla($apellido,e)
})

$colorTarjeta.addEventListener("keyup", function(e){
    validarColorHexadecimal($colorTarjeta, e)
    validarCantidadCaracteres($colorTarjeta)
})

$colorCaracteres.addEventListener("keyup", function(e){
    validarColorHexadecimal($colorCaracteres, e)
    validarCantidadCaracteres($colorCaracteres)
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
        colorearTarjeta($input, color)
    }

}

function colorearTarjeta($input, color){

    let datoAColorear = $input.id 
        
    if(datoAColorear == "colorTarjeta"){
        let tarjeta = document.querySelector("#tarjeta")
        tarjeta.style.backgroundColor = "#" + color
    }

    if (datoAColorear == "colorCaracteres") {
        let caracteres = document.querySelectorAll("#tarjeta p")
        
        caracteres.forEach( item => {
            item.style.color = "#" + color
        } )

    }

    console.log(datoAColorear);

}

// Escribe en la tarjeta
function escribirTarjeta(inputClassName, datoAEscribir){
    
    // Se utiliza el className ya que este es compartido entre el input y los datos de la tarjeta
    // De esta forma la misma funcion edita toda la informacion
    let $informacion = document.querySelector(`#tarjeta .${inputClassName}`)
    $informacion.innerText = datoAEscribir.toUpperCase()
}

function obtenerFechas(){
    let hoy = new Date()

    let mes = hoy.getMonth() + 1;
    console.log(mes);



    let anio = hoy.getFullYear()
    let anioCortado = anio % 100
    console.log(anioCortado);

    escribirFechas(mes, anioCortado)
}

function escribirFechas(mes, anio){

    let fechas = document.querySelectorAll(".fechas p")

    fechas.forEach( fecha =>{
        fecha.innerText += ` ${mes}/${anio}`

        // Se suma 5 al año porque la segunda fecha que se escribe es la de vencimiento que debe ser 
        // posterior a la fecha de emision
        anio += 5
    })
    console.log(fechas);

}

obtenerFechas()



