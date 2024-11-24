import ITodo from '@/types/todo.type';
import { BloomFilter } from 'bloomfilter';
interface IToDoListBox {
     todos: ITodo[];
     bloom: BloomFilter;
     setTodos(todos: ITodo[]): void;
     filter: string;
}
export default IToDoListBox;
