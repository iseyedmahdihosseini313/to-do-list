import ItemOfList from '../itemOfList';
import IToDoListBox from './toDoListBox.type';
const TodoListBox = ({ todos, bloom, setTodos, filter }: IToDoListBox) => {
     
     const filteredTodos = todos.filter(
          (todo) => bloom.test(todo.text) && todo.text.includes(filter)
     );
     const deleteTodo = (id: number) => {
          const updatedTodos = todos.filter((todo) => todo.id !== id);
          setTodos(updatedTodos);
     };
     return (
          <ul className="bg-white/5 mb-10 m-5 p-5 flex-1 min-w-80 md:min-w-1/2 rounded-lg shadow-lg flex flex-col gap-2">
               {filteredTodos.map((todo) => (
                    <ItemOfList
                         key={todo.id}
                         deleteTodo={deleteTodo}
                         todo={todo}
                    />
               ))}
          </ul>
     );
};

export default TodoListBox;
