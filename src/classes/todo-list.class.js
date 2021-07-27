import {Todo} from './todo.class';

export class TodoList {
	constructor() {
		// this.todos = [];
		this.cargarLocalStorage();
	}

	nuevoTodo(todo) {
		this.todos.push(todo);
		this.guardarLocalStorage();
	}

	eliminarTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id != id);
		this.guardarLocalStorage();
		// this.guardarTotales();
	}

	marcarCompletado(id) {
		for (const todo of this.todos) {
			// console.log(id, todo.id);
			if (todo.id == id) {
				todo.completado = !todo.completado;
				this.guardarLocalStorage();
				// this.guardarTotales();
				break;
			}
		}
	}

	eliminarCompletados() {
		this.todos = this.todos.filter((todo) => !todo.completado);
		this.guardarLocalStorage();
		// this.guardarTotales();
	}

	guardarLocalStorage() {
		localStorage.setItem('todo', JSON.stringify(this.todos));
	}

	guardarTotales() {
		const filtroTotal = this.todos.filter((item) => item.completado == false);
		const numTotal = filtroTotal.length;

		return numTotal;
	}

	cargarLocalStorage() {
		/*if (localStorage.getItem('todo')) {
			this.todos = JSON.parse(localStorage.getItem('todo'));
			console.log('Cargar Local: ', this.todos);
		} else {
			this.todos = [];
		}*/
		this.todos = localStorage.getItem('todo') //// IF con operador ternario
			? JSON.parse(localStorage.getItem('todo'))
			: [];

		this.todos = this.todos.map((obj) => Todo.fromJason(obj));
	}
}
