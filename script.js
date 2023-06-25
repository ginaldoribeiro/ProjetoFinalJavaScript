async function recuperar() {
	const url = "https://raw.githubusercontent.com/pauloewerton/testes-json/main/livros.json";	
	const solicitar = new Request(url);
	const resposta = await fetch(solicitar);
	const albuns = await resposta.json();

	destaques(albuns.livros);
}

function destaques(albuns) {
	for(var album of albuns)
		criaralbum(album);
}

function criaralbum(album) {
	var secao = document.querySelector("section");
	var area = document.createElement("div");
	area.classList.add("area");

	area.appendChild(imagemdoalbum(album));
	area.appendChild(titulo(album));
	area.appendChild(descricao(album));
	area.appendChild(saibamais());
	secao.appendChild(area);
}

function imagemdoalbum(album) {
	var areaimagem = document.createElement("div");
	areaimagem.classList.add("areaimagem");
	var imagem = document.createElement("img");
	imagem.classList.add("imagem");
	imagem.setAttribute('src', album.imgCapa);
	areaimagem.appendChild(imagem);
	return areaimagem;
}

function titulo(album) {
	var titulo = document.createElement("h2");
	titulo.textContent = album.titulo;
	return titulo;
}

function descricao(album) {
	var pdescricao = document.createElement("p");
	var descricao = album.descricao
	.replaceAll("<p>", "").replaceAll("</p>", "")
	.replaceAll("<", "").replaceAll(">", "").substring(0, 120);
	pdescricao.textContent = `Descrição: ${descricao}...`;
	return pdescricao;
}

function saibamais() {
	var alink = document.createElement("a");
	alink.textContent = "Saiba mais";
	alink.setAttribute("href", "#");
	return alink;
}

recuperar();