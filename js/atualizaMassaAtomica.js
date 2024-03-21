function atualizaMassaAtomica(massaAtomica) {
    let massaAtualizada = "";
    const indicePonto = massaAtomica.indexOf(".");
    // const indiceAbreParentese = massaAtomica.indexOf("(");

    if (indicePonto != -1) {
        massaAtualizada = massaAtomica.slice(0, indicePonto + 3);
        if (massaAtualizada.indexOf("(") != -1) {
            const novaAtualizaçãoNaMassa = massaAtualizada.slice(0, massaAtualizada.indexOf("("));
            return novaAtualizaçãoNaMassa;
        }

    } else {
        massaAtualizada = massaAtomica;
    }

    return massaAtualizada;
}
