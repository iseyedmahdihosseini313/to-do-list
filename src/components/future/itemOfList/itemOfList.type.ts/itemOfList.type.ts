import ITodo from '@/types/todo.type';
type IItemOfList = {
     todo: ITodo;
     deleteTodo: (id: number) => void;
     editTodo: (id: number, newText: string) => void;
};
export default IItemOfList;