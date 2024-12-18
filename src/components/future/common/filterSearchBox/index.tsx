'use client';
import { useCallback } from 'react';
import _ from 'lodash';
import IFilterSearchBox from './filterSearchBox.type';
import {SearchIcon} from "@/components"

const FilterSeachBox = ({ setFilter }: IFilterSearchBox) => {
     const handleFilter = useCallback(
          _.debounce((text) => {
               setFilter(text);
          }, 300),
          []
     );

     return (
          <div className="bg-blue-200/5 p-2 flex justify-between rounded-lg shadow-lg w-full max-w-md">
               <input
                    className="flex-1 focus:outline-none outline-none px-5 py-2 rounded-md placeholder:text-center text-sm font-extralight tracking-widest bg-blue-500/5 text-blue-200 placeholder:hover:tracking-widest transition-all placeholder:duration-700 focus:placeholder:text-blue-500/55 placeholder:tracking-normal text-center"
                    type="text"
                    placeholder="Filter Todos"
                    onChange={(e) => handleFilter(e.target.value)}
               />
               <button
                    className=" cursor-auto text-white py-2 px-3 rounded-full flex justify-center items-center"
                    type="button"
                    
               >
                    <SearchIcon/>
               </button>
          </div>
     );
};

export default FilterSeachBox;
