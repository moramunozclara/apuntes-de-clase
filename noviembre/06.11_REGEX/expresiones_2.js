let texto = "HOLA hola HoLa ola hielo halo hilo hule";


// console.log(texto.match(/hola/));
// console.log(texto.match(/hola/i));                   // hola
// console.log(texto.match(/hola/ig));                  // hola HoLa hOlA holA...
// console.log(texto.match(/h[aeiou]l[aeiou]/ig));      // h_l_
// console.log(texto.match(/h?[aeiou]l[aeiou]/ig));     // da igual si lleva h o no
// console.log(texto.match(/h?[aeiou]+l[aeiou]/ig));        // da igual si un caracter se repite (hiiieeelo)


console.log(texto.match(/h?[aeiou]*l[aeiou]/ig));        // * condicional, da igual si un caracter está o si se repite (hiiieeelo)






// node expresiones_1

