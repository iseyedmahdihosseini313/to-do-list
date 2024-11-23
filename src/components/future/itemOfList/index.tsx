'use client';
import IItemOfList from './itemOfList.type.ts/itemOfList.type';

const ItemOfList = ({ editTodo,deleteTodo,todo}: IItemOfList) => {
     return (
          <div className="w-full flex gap-1">
               <li className="flex-1 flex px-4 py-2 bg-blue-200/5 rounded-md">
                    <input
                         type="text"
                         value={todo.text}
                         onChange={(e) => editTodo(todo.id, e.target.value)}
                    />

                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
               </li>
          </div>
     );
};

export default ItemOfList;
