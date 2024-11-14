# Expresiones regulares / REGEX

Es un patrón que regula un texto (string)

match, : 
test: prueba si un string rnvaja con una expresión regular

Se delimitan por barras, slash, --> /expresión/

flags:
- i: case insensitive
- g : global ( como si fuera querySelectorAll)

CONJUNTOS: delimitados por corchetes []. Determinan todas las alternativas posibles para un caracter.

- Conjunto negativo: hace excepciones.
[^a,c] (cualquiera menos la a, la coma, y la c): 
- Opcionales: ? :  poner eso a la derecha de un simbolo hace que sea indiferente si se añadió este o no

?
+
*: opcional. En caso de aparecer, se permite que aparezca más veces

repeticiones: veces que puede aoarecer un carácter, con llaves {}
                {2}: puede aparecer 2 veces
                {1,2}: ha de aparecer mínimo 1 vez, máximo 2 veces
                {2, }: tiene un mínimo, y un máximo indefinido

wildcard / comodín : peude ser cualquier caracter:  .

grupos: ()

operador OR: |

caracteres ESCAPADOS : 
.\  : hace un TOGGLE del sifnigificado del caracter 
t\
n\
r\
b\ : boundary/límite 



Todo lo que trabaja con strings, trabaja con REGEX

utilizar replace noos permite devolver un callback:
Regex funciona como filtro para obtener el input que necesitamos que sea introducido en el callback

parrafo.innerHTML = textoOriginal.replace(expresion, hazMatch =>)
 la expresion que busca + el callback una vez que pase
return `<span class="resaltado">${hazMatch}</span>`;
-que retorne lo que hará la expresion que pasó el filtro




regular expressions ---> regex 

es un patrón que describe un texto (string)

match --> método de STRING string.match(regex)
test --> método de REGEX  regex.test(string)

delimitadas ---> /expresión/

^ --> inicio del input(string a evaluar)
$ --> fin del input(string a evaluar) 

flags ----> i--> case insensitive, g ---> global

conjuntos ----> []
 ---> determinan todas las alternativas posibles para un caracter
 ejemplo --> [aw?9] --> representa UN SOLO CARACTER, que puede ser a,w,?,9
 conjunto negativo ---> [^a,c] ---> representa UN SOLO CARACTER, que puede ser cualquiera menos a, "," ,c

caracteres especiales modificadores ---> ? + * --> modifican al caracter PRECEDENTE
? -----> caracter precendente es OPCIONAL
+ ----> caracter precendente puede aparecer más de una vez
* --> caracter precendente es OPCIONAL, pero en caso de aparecer puede aparecer más de una vez

repeticiones ------> veces que puede aparecer un caracter ---> {}

wildcard ----> . --> puede ser cualquier caracter 

grupos ----> () ---> están indexados dentro de la expresión ---> backtracking

operador OR --> | 

caracteres ESCAPADOS ---> \ ---> toggle (alterna) del significado del caracter 
\. --> el caracter PUNTO
\t --> caracter tabulador 
\n --> nueva línea
\r --> return
\b ----> caracter "límite" boundary




--------------
Afsfsdf Bjdeded
B. Ajidfd
Akdjcnd B.
A. B.


strings -----> expresiones regulares

STRING.replace(regex, callback*)

*lo que retorne el callback, será el sustituto

/xyz/ig

new RegExp("expresión como string","flags como string")

/x?y+z/ig ---> new RegExp("x?y+z","ig")


