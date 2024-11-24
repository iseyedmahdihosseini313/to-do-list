import ITodo from '@/types/todo.type';
type IItemOfList = {
     todo: ITodo;
     deleteTodo: (id: number) => void;
};
export default IItemOfList;