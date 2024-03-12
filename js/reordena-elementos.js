// Mudar index 56 a 70 para o final e depois o 88 a 102 tbm para o final.
function reordenaElementos() {
    for (let i = 56; i <= 70; i++) {
        const elementos = document.getElementsByClassName(i);

            const elemento = elementos[0]; // Acesse o primeiro elemento da coleção

            // Remova o elemento da lista
            elemento.parentNode.removeChild(elemento);

            // Adicione o elemento de volta à lista (se necessário)
            listaElementos.appendChild(elemento);
    }
    for (let i = 88; i <= 102; i++) {
        const elementos = document.getElementsByClassName(i);
        
            const elemento = elementos[0]; // Acesse o primeiro elemento da coleção

            // Remova o elemento da lista
            elemento.parentNode.removeChild(elemento);

            // Adicione o elemento de volta à lista (se necessário)
            listaElementos.appendChild(elemento);
    }
}