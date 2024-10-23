// cambiar color aleatorio

const body = document.querySelector("body");


fetch("/color")
.then(respuesta => respuesta.json())
.then(({r,g,b}) => {
    body.style.backgroundColor = `rgb(${[r,g,b].join(",")})`;
});



// body.style.backgroundColor = `rgb(${[0,0,0].map(() => Math.floor(Math.random() * 256)).join(",")})`;