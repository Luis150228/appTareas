// import {Todo} from './classes/todo.class';
// import {TodoList} from './classes/todo-list.class';
import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';
import './styles.css';

const todoList = new TodoList();

const tarea = new Todo('Comprar un Dragon'); ///Crea la tarrea con el id,   la hora y estado

todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);

console.log(todoList);
