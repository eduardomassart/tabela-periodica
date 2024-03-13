function coloreGrupos(elemento, indice) {
    const grupo = elemento.groupBlock;
    const elementoTabela = document.querySelectorAll(".elemento")[indice];

    elementoTabela.classList.add(grupo.replace(/ /g, "-"));
}

function corrigeElementoErrados() { //elementos errados

        //117
        const elemento117 = document.getElementsByClassName("116")[0];
        elemento117.classList.remove("post-transition-metal");
        elemento117.classList.add("halogen");

        //103
        const elemento103 = document.getElementsByClassName("102")[0];
        elemento103.classList.remove("transition-metal");
        elemento103.classList.add("actinoid");

        //113 a 116
        for (let i = 112; i <= 116; i++) {
            const elemento = document.getElementsByClassName(i)[0];
            elemento.classList.remove("post-transition-metal");
            elemento.classList.add("metal");
        }
}