const cowsay = require("cowsay");


console.clear; //me limpia la consola antes de empezar

console.log("Mi primer app de Node!!");



console.log(cowsay.say({
    text : "A ver a ver probando probando CAMBIO CAMBIO mkdalgo mas",
    e : "oO",
    T : "U "
}));



console.log("HELLOOOO")

function sumar (num1, num2) {
    return num1+num2;
}
const resultado = sumar(5,23);
console.log("5 + 23 es: ", resultado);