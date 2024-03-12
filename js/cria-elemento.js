const listaElementos = document.querySelector(".elementos");

//insere elementos criado na lista de elementos;
function insereElementosLista(elemento, indice) {
    const numero = elemento.atomicNumber;
    const simbolo = elemento.symbol;

    listaElementos.appendChild(criaElemento(numero, simbolo, indice))
}


//cria cada elemento e insere seus filhos (N atomico e simbolo);
function criaElemento(numero, simbolo, indice) {
    const elemento = document.createElement("li");
    elemento.classList.add("elemento");
    elemento.classList.add(indice);

    elemento.appendChild(criaNumeroAtomico(numero));
    elemento.appendChild(criaSimbolo(simbolo));

    return elemento;
}


//cria numero atomico e atribui seu valor;
function criaNumeroAtomico(dado) {
    const numeroAtomico = document.createElement("p");
    numeroAtomico.classList.add("numero_atomico");
    numeroAtomico.textContent = dado;

    return numeroAtomico;
}

//cria simbolo e atribui seu valor;
function criaSimbolo(dado) {
    const simbolo = document.createElement("p");
    simbolo.classList.add("simbolo");
    simbolo.textContent = dado;

    return simbolo;
}

