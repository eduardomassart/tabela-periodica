function insereEmptySpaces() {
    const lista = document.querySelector(".elementos");
    // const elementosComEspaçoAntes = [1, 4, 12, 72, 104, 57, 88]; correto!!!!
    const elementosComEspaçoAntes = [1, 4, 12, 56, 73, 88, 103];
    const espacosPorElemento = [16, 10, 10, 1, 1, 3, 3];
    let contador = 0;

    for (let i = 0; i < elementosComEspaçoAntes.length; i++) {
        const elemento = elementosComEspaçoAntes[i];

        for (let j = 0; j < espacosPorElemento[i]; j++) {
            const emptyElements = document.createElement("li");
            emptyElements.classList.add("empty");
            lista.insertBefore(emptyElements, lista.children[elemento + contador]);
            contador++;
        }
    }

    
        const spaceLine = document.createElement("li");
        spaceLine.classList.add("space-line");
        lista.insertBefore(spaceLine, lista.children[126]);
}


