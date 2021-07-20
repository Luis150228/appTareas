import {todoList} from '..';
import {Todo} from '../classes';

//Referencias del HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {
	const htmlTodo = `
	<li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
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
