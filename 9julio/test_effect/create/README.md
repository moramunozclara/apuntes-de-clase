# Hook useEffect

Te permite realizar efectos secundarios (ejecutar código) en tus componentes funcionales. En otras palabras nos permite ejecutar código después de que el componente se renderiza.

## Para qué se usa

1. Realizar petciones a APIs (Application Programming Interface)
2. Manipular el DOM de manera directa (cambiar el title, crear elements, etc.)
3. Configurar suscripciones o temporizadores (crear/quitar eventListeners, manejar setInterval)



## Sintaxis básica: 
se compone de una función y un array

```js
// primer atributo mi función, después el array de dependencias

useEffect( () => {
    // Código que se eejcutará después de renderizar (componentDidMount / componentUpdate)

    // OPCIONAL poner un return
    retun () => {
        // código que se ejecutará al demonstar el componente (componentWillUnmount)
    }



}, [count, count2, status])
```

## La función de cleauUp (la del return), función de limpiezza de la consola

Esta funcion se ejecuta
1. antes de quitar el componente
2. antes de ejecutar el efecto de la siguiente renderización, si el efecto se ejecuta más de una vez

Es util para
- cancelar suscripciones de eventlisteners
- limpiar temporizadores
- liberar recursos que ya no necesitamos

## Tips / claves para recordar

- Se ejecuta después de cada renderización
- El array de dependencias controla cuándo se vuelve a ejecutar
- La función de cleanUp es crucial para prevenir memory leaks y comportamientos inesperados (enviar formulario 20 veces x ej)
- useEffect es una herramienta versátil para reemplazar todos los métodos de ciclos de vida de los componentes de clase.

## ejercicios useEffect

1. Crea componente que muestre msj en consola cuando el componente se muestre por 1ª vez

2. Crea componente que registre elt iempo desde que el comp se cargó 

3. Crea componente que obtenga datos de una API y los muestre en pantalla 
(https://jsonplaceholder.typicode.com/posts)

4. Crea un contador con botones para incrementar y decrementar el valor. Usa useEffect para registrar cada vez que el valor del contador cambie

