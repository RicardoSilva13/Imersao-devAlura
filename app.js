function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Escreva algo relacionado a tropa que está procurando</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let tropa = "";
    let descricao = "";

    for (let dado of dados) {

        tropa = dado.tropa.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (tropa.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}"target="_blank">
                    ${dado.tropa}
                    </a>
                </h2>
                    <p class="descricao-meta"> ${dado.descricao}
                    <p>
                <a href="${dado.link}" target="_blank">Saiba mais
                </a>
            </div> `;
        }
    };

    if (!resultados) {
        resultados = "<p>Escreva algo relacionado a tropa que está procurando</p>"
    }

    section.innerHTML = resultados;
}