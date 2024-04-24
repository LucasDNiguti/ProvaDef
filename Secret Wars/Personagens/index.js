class Personagem {
    constructor(nome, descricao, urlImagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.urlImagem = urlImagem;
    }
}

let personagens = [];

function criarPersonagem(nome, descricao, urlImagem) {
    const novoPersonagem = new Personagem(nome, descricao, urlImagem);
    personagens.push(novoPersonagem);
}

function listarPersonagens() {
    return personagens;
}

function atualizarPersonagem(nomeAntigo, novoNome, novaDescricao, novaUrlImagem) {
    const index = personagens.findIndex(personagem => personagem.nome === nomeAntigo);
    if (index !== -1) {
        personagens[index].nome = novoNome;
        personagens[index].descricao = novaDescricao;
        personagens[index].urlImagem = novaUrlImagem;
    }
}

function deletarPersonagem(nome) {
    personagens = personagens.filter(personagem => personagem.nome !== nome);
}
