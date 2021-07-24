// import {Todo} from './classes/todo.class';
// import {TodoList} from './classes/todo-list.class';
import {Todo, TodoList} from './classes';
import {crearTodoHtml, totalPendientes} from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

/*const tarea = new Todo('Comprar un Dragon'); ///Crea la tarrea con el id,   la hora y estado

todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);

console.log(todoList);*/

// console.log(todoList.todos.length);

todoList.todos.forEach((todo) => crearTodoHtml(todo));

totalPendientes();

todoList.todos[1].imprimirClase();
