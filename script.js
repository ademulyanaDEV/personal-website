
//função que escreve o texto
typeWrite(document.querySelector(".typewriter"));

function typeWrite(elemento) {
	const textoArray = elemento.innerHTML.split("");
	elemento.innerHTML = "";
	textoArray.forEach(function (letra, i) {
		setTimeout(function () {
			elemento.innerHTML += letra;
		}, 100 * i);
	});
}