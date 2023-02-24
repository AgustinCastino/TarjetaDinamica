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
}

