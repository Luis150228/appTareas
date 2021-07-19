// import {Todo} from './classes/todo.class';
// import {TodoList} from './classes/todo-list.class';
import {Todo, TodoList} from './classes';
import './styles.css';

const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');
const tarea2 = new Todo('Comprar un Dragon');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);
