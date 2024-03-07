const animal= prompt ("Ingrese un animal");

if (animal.toLowerCase()==="perro") {
alert ("Mi animal es un perro");
} else if (animal.toLowerCase() === "gato"){
    alert ("Mi animal es un gato");
} else if (animal.toLowerCase() ==="conejo"){
    alert ("Mi animal es un conjeo");
} else {
    alert ("No conozco ese animal");
}

const parrafo = document.querySelector ("#parrafo");
parrafo.innerHTML = "Este es el nuevo contenido del parrafo"
console.log (parrafo)

var variable;

console.log (variable);