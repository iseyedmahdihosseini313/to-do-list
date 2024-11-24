'use client';
import IItemOfList from './itemOfList.type.ts/itemOfList.type';

const ItemOfList = ({ deleteTodo, todo }: IItemOfList) => {
     return (
          <div className="w-full flex gap-1">
               <li className="flex-1  px-4 py-2 bg-blue-200/5 rounded-xl flex justify-between">
                    <span className=' bg-gray-100/5 text-gray-50/55  max-w-36 py-1 px-2 rounded-md overflow-hidden'>{todo.text}</span>

                    <button className='bg-red-700/10 px-2 text-2xl flex justify-center items-center w-10 rounded-lg text-red-600' onClick={() => deleteTodo(todo.id)}>-</button>
               </li>
          </div>
     );
};

export default ItemOfList;
