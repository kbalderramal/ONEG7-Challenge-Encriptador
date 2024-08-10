let inputMessage;
let encriptedText;
let decryptMessage;

function getInput() {
    // obtener el valor ingreado en el textarea y asignarlo a la variable inputMessage
    inputMessage = document.getElementById("input-text").value;
    // medida provicional, imprimri el texto ingresado en el área de salida
    // document.getElementById("output-area").textContent = `${inputMessage}`; 
    // llamada a la función para valdiar el mensaje ingresado
    inputValidation(inputMessage);   
}

function inputValidation(message) {
    const regex = /^[a-z0-9\s]+$/;

    if (regex.test(message)){
        return True;
    }else{
        alert("Mensaje invalido\nIngrese solo letras minusculas o números.");
    }
}

// TODO: 
// [ x ] get input function
// [ x ] input validation function 
// [ ] clear input textarea 
// [ ] encrypt text function
// [ ] decrypt message function
// [ ] copy button function



