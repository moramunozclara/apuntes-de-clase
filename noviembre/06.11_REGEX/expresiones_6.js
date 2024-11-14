let texto = "'algo entre comillas'   \"algo entre comillas\" \"algo entre comillas'";

console.log(texto.match(/('|")[a-z]+\1/ig));   // boundary, obligación de que solo muestre palabras completas

// + \1 : añadir lo mismo que había primer grupo (backtracking)
//node expresiones_6





// node expresiones_5

