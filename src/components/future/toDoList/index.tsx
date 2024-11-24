'use client';
import React, { useRef, useState } from 'react';
import { BloomFilter } from 'bloomfilter';
import { AddSearchBox, FilterSearchBox, TodoListBox } from '@/components';
import ITodos from '@/types/todos.type';
const bloom = new BloomFilter(32 * 256, 16); // Filter bloom bar asase size va hash function
const TodoList = () => {
     const [todos, setTodos] = useState<ITodos>([]);
     const [filter, setFilter] = useState('');
     const addRef = useRef<HTMLInputElement>(null);
     return (
          <div className="bg-black min-w-[100vw] min-h-screen flex flex-col gap-2 justify-center items-center p-5 ">
               <FilterSearchBox setFilter={setFilter} />
               <AddSearchBox
                    setTodos={setTodos}
                    bloom={bloom}
                    todos={todos}
                    addRef={addRef}
               />
               <TodoListBox
                    bloom={bloom}
                    filter={filter}
                    setTodos={setTodos}
                    todos={todos}
               />
          </div>
     );
};

export default TodoList;
