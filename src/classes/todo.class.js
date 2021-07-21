export class Todo {
	static fromJason({tarea, id, completado, creado}) {
		const tempTodo = new Todo(tarea); //AL pasar nuestro Json.strinfy a Parse este pierde su calidad de instancia y se convierte en un objeto este objeto tiene las catacteriticas de un "todo" sin serlo como por ejemplo tiene : {tarea, id, completado, creado}.
		tempTodo.id = id;
		tempTodo.completado = completado;
		tempTodo.creado = creado;

		return tempTodo;
	}

	constructor(tarea) {
		this.tarea = tarea;
		this.id = new Date().getTime();
		this.completado = false;
		this.creado = new Date();
	}

	imprimirClase() {
		// console.log(`${this.tarea} - ${this.id}`);
	}
}
