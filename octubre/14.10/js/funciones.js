const controles = document.querySelectorAll("input");
const cuadros = document.querySelectorAll(".color");
const textoColor = document.querySelectorAll(".color p");

function hexadecimal(r,g,b) {
    return `#${[r,g,b].map(n => {

        n = Number(n); //convertir el string en número
        return `${ n < 16 ? "0" : "" }${n.toString(16)}`
    }).join("")}`;
}


// console.log(14 + "2");
// console.log((14).toString());

// console.log(hexadecimal(255,10,0));

controles.forEach((control, i) => {
    control.addEventListener("input", () => {
        // console.log(control.value);

        cuadros[i + 1].style.backgroundColor = hexadecimal(
            i == 0 ? control.value : 0,
            i == 1 ? control.value : 0,
            i == 2 ? control.value : 0
        );

        textoColor.innerText = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value);


        // cuadros[1].style.backgroundColor = hexadecimal(controles[1].value, 00, 00);
        // cuadros[2].style.backgroundColor = hexadecimal(controles[2].value);
        // cuadros[3].style.backgroundColor = hexadecimal(controles[3].value);

    });
});