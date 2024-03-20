function habilitaInformativo(elementos) {
    const elemento = document.querySelectorAll(".elemento");
    const informativo = document.querySelector(".informativo");

    const informativoTitulo = document.querySelector(".informativo_titulo");

    const infoElemento = document.querySelector(".informativo_elemento")
    const elementoSimbolo = document.querySelector(".informativo_elemento-simbolo");
    const elementoNome = document.querySelector(".informativo_elemento-nome");
    const elementoNumeroAtomico = document.querySelector(".informativo_elemento-numero");
    const elementoMassaTomica = document.querySelector(".informativo_elemento-massa");

    const tabSimbolo = document.querySelector(".tabSimbolo");
    const tabNumeroAtomico = document.querySelector(".tabNumeroAtomico");
    const tabMassaTomica = document.querySelector(".tabMassaAtomica");
    const tabConfigElet = document.querySelector(".tabConfigElet");


    elemento.forEach((element) => {
        element.addEventListener("mouseover", () => {
            informativo.style.display = "none";
            const indiceElementoAlvo = element.classList[1];
            const classeElementoAlvo = element.classList[2];
            infoElemento.classList = "informativo_elemento";


            const elementoObj = {
                simbolo: elementos[indiceElementoAlvo].symbol,
                nome: elementos[indiceElementoAlvo].name,
                numeroAtomico: elementos[indiceElementoAlvo].atomicNumber,
                massaAtomica: elementos[indiceElementoAlvo].atomicMass,
                configEletron: elementos[indiceElementoAlvo].electronicConfiguration
            }

            const variaveisDeInput = [informativoTitulo, elementoSimbolo, elementoNome, elementoNumeroAtomico, elementoMassaTomica, tabSimbolo, tabNumeroAtomico, tabMassaTomica, tabConfigElet];
        
            variaveisDeInput.forEach((variavel) => {
                variavel.textContent = "";
            });

            informativoTitulo.textContent = elementoObj.nome;

            infoElemento.classList.add(classeElementoAlvo);
            elementoSimbolo.textContent = elementoObj.simbolo;
            elementoNome.textContent = elementoObj.nome;
            elementoNumeroAtomico.textContent = elementoObj.numeroAtomico;
            elementoMassaTomica.textContent = atualizaMassaAtomica(elementoObj.massaAtomica);

            tabSimbolo.textContent = elementoObj.simbolo;
            tabNumeroAtomico.textContent = elementoObj.numeroAtomico;
            tabMassaTomica.textContent = atualizaMassaAtomica(elementoObj.massaAtomica);
            tabConfigElet.textContent = elementoObj.configEletron;

            informativo.style.display = "flex";
        })
    })
}