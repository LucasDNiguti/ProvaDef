class Comic {
    constructor(titulo, descricao, dataPublicacao, urlCapa) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataPublicacao = dataPublicacao;
        this.urlCapa = urlCapa;
    }
}

let comics = [];

function criarComic(titulo, descricao, dataPublicacao, urlCapa) {
    const novaComic = new Comic(titulo, descricao, dataPublicacao, urlCapa);
    comics.push(novaComic);
}

function listarComics() {
    return comics;
}

function atualizarComic(tituloAntigo, novoTitulo, novaDescricao, novaDataPublicacao, novaUrlCapa) {
    const index = comics.findIndex(comic => comic.titulo === tituloAntigo);
    if (index !== -1) {
        comics[index].titulo = novoTitulo;
        comics[index].descricao = novaDescricao;
        comics[index].dataPublicacao = novaDataPublicacao;
        comics[index].urlCapa = novaUrlCapa;
    }
}

function deletarComic(titulo) {
    comics = comics.filter(comic => comic.titulo !== titulo);
}