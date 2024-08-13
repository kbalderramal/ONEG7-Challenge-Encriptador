let inputMessage;
let encriptedText;
let decryptText;

// Obetener el mensaje ingresado en el textarea
function getInput() {
    // Guardar el texto ingresado a traves del id de la etiqueta
    inputMessage = document.getElementById("input-text").value;
    
    // Verificar el texto
    return inputValidation(inputMessage);
}

// Validar que el texto ingresado cumpla con los críterios establecidos en el reto
function inputValidation(message) {
    // Expresión rgular que acepta solo números y letras minuscuals
    const regex = /^[a-z0-9\s]+$/;

    // Probar le expresión y retornar el valor booleano correspondiente
    if (regex.test(message)){
        return true;
    }else{
        // alert("Mensaje invalido\nIngrese solo letras minusculas o números.");
        return false;
    }
}

// Encriptar texto según los parametrós establecidos en el reto
function encrypt() {

    // Permitir la ejecución del resto de la función solo si se cumple con lo establecido
    if (!getInput()) {
        alert("Mensaje inválido\nIngrese solo letras minúsculas o números.");
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
    document.getElementById("output-area").textContent = `${encriptedText}`; 
    return encriptedText;
}

// 
function decrypt() {
    // return decryptText;
}

// TODO: 
// [ x ] get input function
// [ x ] input validation function 
// [ ] clear input textarea 
// [ x ] encrypt text function
// [ ] decrypt message function
// [ ] copy button function



