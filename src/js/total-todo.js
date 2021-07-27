import {todoList} from '..';
import {TodoList} from '../classes';

export const totalTodos = () => {
	const v = todoList.guardarTotales();

	const txtTotal = (valor) => {
		const total = document.querySelector('.todo-count');
		const texto = `Tareas: ${valor}`;

		return (total.innerHTML = texto);
	};

	return txtTotal(v);
};
