let inputMessage;
let encriptedText;
let decryptMessage;

function getInput() {
    // obtener el valor ingreado en el textarea y asignarlo a la variable inputMessage
    inputMessage = document.getElementById("input-text").value;
    // medida provicional, imprimri el texto ingresado en el área de salida
    document.getElementById("output-area").textContent = `${inputMessage}`; 
    return inputMessage;   
}

// TODO: 
// [ x ] get input function
// [ ] input validation function 
// [ ] encrypt text function
// [ ] decrypt message function
// [ ] copy button function
// [ ] clear input textarea



