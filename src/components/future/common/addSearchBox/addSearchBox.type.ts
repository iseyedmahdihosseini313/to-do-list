import ITodos from "@/types/todos.type";
import { BloomFilter } from "bloomfilter";

interface IAddSearchBox {
     addRef: React.RefObject<HTMLInputElement>;
     setTodos: React.Dispatch<React.SetStateAction<ITodos>>;
     todos: ITodos;
     bloom: BloomFilter;
}
export default IAddSearchBox;