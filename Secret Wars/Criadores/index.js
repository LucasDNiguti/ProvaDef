class Criador {
    constructor(nome, funcao, quadrinhosContribuidos) {
        this.nome = nome;
        this.funcao = funcao;
        this.quadrinhosContribuidos = quadrinhosContribuidos;
    }
}

let criadores = [];

function criarCriador(nome, funcao, quadrinhosContribuidos) {
    const novoCriador = new Criador(nome, funcao, quadrinhosContribuidos);
    criadores.push(novoCriador);
}

function listarCriadores() {
    return criadores;
}

function atualizarCriador(nomeAntigo, novoNome, novaFuncao, novosQuadrinhosContribuidos) {
    const index = criadores.findIndex(criador => criador.nome === nomeAntigo);
    if (index !== -1) {
        criadores[index].nome = novoNome;
        criadores[index].funcao = novaFuncao;
        criadores[index].quadrinhosContribuidos = novosQuadrinhosContribuidos;
    }
}

function deletarCriador(nome) {
    criadores = criadores.filter(criador => criador.nome !== nome);
}
