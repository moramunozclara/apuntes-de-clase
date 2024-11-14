let texto = " lsdfkw loquesea.com hola.net xyz.org";

// console.log(texto.match(/[a-z]+.(com|es|org|net)/g));

// el punto representa cualquier caracter. es un wildcar..
//  da igual si algo es .com o 3com. porque el punto representa todo

console.log(texto.match(/[a-z]+\.(com|es|org|net)/g));

// con un caracter ESCAPADO (que hace un TOGGLE del sifnigificado del caracter),
// podemos hacer que el punto significa obligatoriamente PUNTO

console.log(texto.match(/[a-zA-Z]+.(com|es|org|net)/g));
// incluir mayus y minusc solo en la parte previa al . com







// node expresiones_4

