const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let elementos = JSON.parse(this.responseText);

		elementos.forEach(element => {
			const indice = elementos.indexOf(element);
			insereElementosLista(element, indice);
			coloreGrupos(element, indice);
		});
		reordenaElementos();
		insereEmptySpaces();
		corrigeElementoErrados();
	}
});


xhr.open('GET', 'https://periodictable.p.rapidapi.com/');
xhr.setRequestHeader('X-RapidAPI-Key', '85dc2bc749msh4834fe2cd3cbf13p11f8f4jsn2a526925af1a');
xhr.setRequestHeader('X-RapidAPI-Host', 'periodictable.p.rapidapi.com');

xhr.send(data);

