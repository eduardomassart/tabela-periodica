function atualizaMassaAtomica(massaAtomica) {
    let massaAtualizada = "";
    const indicePonto = massaAtomica.indexOf(".");
    // const indiceAbreParentese = massaAtomica.indexOf("(");

    if (indicePonto != -1) {
        massaAtualizada = massaAtomica.slice(0, indicePonto + 3);

    } else {
        massaAtualizada = massaAtomica;
    }

    return massaAtualizada;
}
