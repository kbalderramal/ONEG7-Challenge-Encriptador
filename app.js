let inputMessage;
let encriptedText;
let decryptText;

// Obetener el mensaje ingresado en el textarea
function getInput() {
    // Guardar el texto ingresado a traves del id de la etiqueta
    inputMessage = document.getElementById("input-text-area").value;
    
    // Verificar el texto
    return inputValidation(inputMessage);
}

// Validar que el texto ingresado cumpla con los críterios establecidos en el reto
function inputValidation(message) {
    // Expresión rgular que acepta solo números y letras minuscuals
    const regex = /^[a-z\s]+$/;

    // Probar le expresión y comprobar que el string no este vacio retornar el valor booleano correspondiente
    if (regex.test(message) && message.trim().length > 0){
        return true;
    }else{
        return false;
    }
}

// Encriptar texto según los parametros establecidos en el reto
function encrypt() {

    // Permitir la ejecución del resto de la función solo si se cumple con lo establecido
    if (!getInput()) {
        alert("Mensaje inválido\nIngrese solo letras minúsculas y no utilice acentos.");
        return;  // Detener la ejecución si el mensaje es inválido
    }

    encriptedText = inputMessage;

    // Buscar y remplazar cada vocal por su respectivo nuevo valor
    // /g indica que debe aplicarse el cambio para cada incidencia
    encriptedText = encriptedText.replace(/e/g, "enter");
    encriptedText = encriptedText.replace(/i/g, "imes");
    encriptedText = encriptedText.replace(/a/g, "ai");
    encriptedText = encriptedText.replace(/o/g, "ober");
    encriptedText = encriptedText.replace(/u/g, "ufat");

    // Imprimir en el textarea correspondiente el resultado
    document.getElementById("output-text-area").textContent = `${encriptedText}`; 
    
    // Mostrar textarea de la salida y botón de copiar
    document.getElementById('afther-processing').style.display= 'block';

    // Ocultar imagen y texto adicional
    document.getElementById('before-processing').style.display= 'none';
}

// Desencriptar texto según los parámetros establecidos en el reto
function decrypt() {
    // Permitir la ejecución del resto de la función solo si se cumple con lo establecido
    if (!getInput()) {
        alert("Mensaje inválido\nIngrese solo letras minúsculas y sin acentos");
        return;  // Detener la ejecución si el mensaje es inválido
    }

    decryptText = inputMessage;

    // Por cada fragmento encriptado remplezar por la respectiva vocal
    decryptText = decryptText.replace(/enter/g, "e");
    decryptText = decryptText.replace(/imes/g, "i");
    decryptText = decryptText.replace(/ai/g, "a");
    decryptText = decryptText.replace(/ober/g, "o");
    decryptText = decryptText.replace(/ufat/g, "u");

    // Imprimir en el textarea correspondiente el resultado
    document.getElementById("output-text-area").textContent = `${decryptText}`; 

    // Mostrar textarea de la salida y botón de copiar
    document.getElementById('afther-processing').style.display= 'block';
    
    // Ocultar imagen y texto adicional
    document.getElementById('before-processing').style.display= 'none';
}

// Copiar a portapapeles el texto transformado
function copy() {
    // Obtener el elemento textarea con el id "output-area"
    let copyText = document.getElementById("output-text-area");

    // Seleccionar el texto dentro del textarea
    copyText.select();
    
    // Ajustar el rango de selección para asegurarse de que todo el texto se seleccione
    // (particularmente útil en dispositivos móviles)
    copyText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(copyText.value);

    alert("Texto copiado con éxito.")
}

// TODO: 
// [ x ] get input function
// [ x ] input validation function 
// [ x ] encrypt text function
// [ x ] decrypt message function
// [ x ] copy button function
// [ ] cambiar a rojo el margen del textarea input en error y el texto de instucción
// [ x ] verificar texto copiado con modal o alert
// [ ] agregar disclaimer por fallos en la encriptación/desencriptación
// [ ] agregar sección de comentarios
// [ x ] validar que el input no este vacio
// [ x ] cambiar el regex para que no acepte números



