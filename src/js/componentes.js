import {todoList} from '..';
import {Todo} from '../classes';

//Referencias del HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const dataCount = document.querySelector('.todo-count');

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

/*export const totalPendientes = () => {
	const general = todoList.todos;

	const datas = general.filter((item) => {
		// console.log(item);
		return (item = false);
	});
	console.log('Todos los todo :', general);
	console.log('los True :', datas);
};*/

export const totalPendientes = () => {
	const general = todoList.guardarTotales();
	console.log('Todos los todo :', general);
};

//Eventos
txtInput.addEventListener('keyup', (e) => {
	if (e.keyCode === 13 && txtInput.value.length > 0) {
		// console.log(txtInput.value);
		const nuevoTodo2 = new Todo(txtInput.value);
		todoList.nuevoTodo(nuevoTodo2);

		crearTodoHtml(nuevoTodo2);
		txtInput.value = '';

		// console.log(todoList);
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
	// console.log(todoList);
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

ulFiltros.addEventListener('click', (e) => {
	const filtro = e.target.text;
	console.log(filtro);
	if (!filtro) {
		return;
	}

	anchorFiltros.forEach((tareas) => tareas.classList.remove('selected'));
	// console.log(e.target);
	e.target.classList.add('selected');

	for (const elemento of divTodoList.children) {
		// console.log(elemento);
		elemento.classList.remove('hidden'); //Removemos la clase oculta de todos los elementos de la lista ul
		const completado = elemento.classList.contains('completed'); //si el elemento de la lista esta con el checkbox y la clase "completed"

		switch (filtro) {
			case 'Pendientes':
				if (completado) {
					elemento.classList.add('hidden');
				}
				break;
			case 'Completados':
				if (!completado) {
					elemento.classList.add('hidden');
				}
				break;
		}
	}
});
