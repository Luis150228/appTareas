import '../css/componentes.css';
// import logotipoWebPack from '../assets/img/webpack-logo.png';

///Originalmente estaba en index.js
export const saludar = (nombre) => {
	console.log('Creando etiqueta H1');

	const elemento = document.createElement('h1');
	elemento.innerText = `Hola!! ${nombre}`;

	document.body.append(elemento);

	//img
	// console.log(logotipoWebPack);
	// const imagen = document.createElement('img');
	// imagen.src = logotipoWebPack;
	// document.body.append(imagen);
};
