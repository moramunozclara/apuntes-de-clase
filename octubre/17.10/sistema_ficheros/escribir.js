const fs = require("fs");


//  desestructurar al momento de importarlo

const {writeFile, appendFile} = require("fs");

writeFile("./prueba.txt", "cualquier otra cosa", error => {
    if(!error) {
        return console.log("listo! archivo leído"); //si no ponemos return, se devolverán AMBOS console.log
                                                    // añadir RETURN nos libra de tener que poner un ELSE
    }
    console.log("tuvimos un error");
})