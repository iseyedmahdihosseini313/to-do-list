import { SearchIcon } from '@/components';
import IAddSearchBox from './addSearchBox.type';
const AddSearchBox = ({ addRef, setTodos, todos, bloom }: IAddSearchBox) => {
     const addTodo = (text: string) => {
          const newTodo = {
               id: todos.length === 0 ? 1 : todos.length + 1,
               text,
               completed: false,
          };
          bloom.add(text);
          setTodos([...todos, newTodo]);
     };

     return (
          <div className="bg-blue-200/5 p-2 flex justify-between rounded-lg shadow-lg w-full max-w-md">
               <input
                    className="focus:outline-none outline-none flex-1 px-5 rounded-md placeholder:text-center text-sm font-extralight tracking-widest bg-blue-500/5 text-blue-200 placeholder:hover:tracking-widest transition-all placeholder:duration-700 focus:placeholder:text-blue-500/55 placeholder:tracking-normal"
                    type="text"
                    placeholder="Add Todo"
                    ref={addRef}
               />
               <button
                    className=" hover:scale-110 transition-all duration-300 text-white py-2 px-3 rounded-full flex justify-center items-center"
                    type="button"
                    onClick={() => {
                         if (addRef.current?.value) {
                              addTodo(addRef.current?.value);
                              addRef.current.value = '';
                         }
                    }}
               >
                    <SearchIcon />
               </button>
          </div>
     );
};

export default AddSearchBox;
