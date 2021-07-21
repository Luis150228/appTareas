import {todoList} from '..';
import {Todo} from '../classes';

//Referencias del HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

export const crearTodoHtml = (todo) => {
	const htmlTodo = `
	<li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="cat" type="checkbox" ${todo.completado ? 'checked' : ''}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template" />
	</li>`;

	const div = document.createElement('div');
	div.innerHTML = htmlTodo;

	divTodoList.append(div.firstElementChild); /// El primer elemento(hijo) dentro del DIV

	return div.firstElementChild;
};

//Eventos
txtInput.addEventListener('keyup', (e) => {
	if (e.keyCode === 13 && txtInput.value.length > 0) {
		console.log(txtInput.value);
		const nuevoTodo2 = new Todo(txtInput.value);
		todoList.nuevoTodo(nuevoTodo2);

		crearTodoHtml(nuevoTodo2);
		txtInput.value = '';

		console.log(todoList);
	}
});

divTodoList.addEventListener('click', (e) => {
	//console.log(e.target.localName); //Se identifica el elemento al que se le dio click(e) y lo muestra en consola
	const nombreElemento = e.target.localName; //Input, Label o button
	const todoElemento = e.target.parentElement.parentElement; //Regresa o muestra el elemento html en este caso 2 generaciones atras.
	const todoId = todoElemento.getAttribute('data-id'); //En base al atributo extraemos el ID
	if (nombreElemento.includes('input')) {
		todoList.marcarCompletado(todoId);
		todoElemento.classList.toggle('completed');
	} else if (nombreElemento.includes('button')) {
		todoList.eliminarTodo(todoId);
		divTodoList.removeChild(todoElemento);
	} else {
	}
	console.log(todoList);
});

btnBorrar.addEventListener('click', (e) => {
	todoList.eliminarCompletados();
	for (let i = divTodoList.children.length - 1; i >= 0; i--) {
		//El For nos indica el elemento actual de los posibles elementos existentes
		const elemento = divTodoList.children[i];
		// const elementoClass = elemento.getAttribute('class'); //En base al atributo extraemos el ID
		// const elementoClass = elemento.classList.contains('completed');
		// console.log(elementoClass);
		if (elemento.classList.contains('completed')) {
			divTodoList.removeChild(elemento);
		}
	}
});
