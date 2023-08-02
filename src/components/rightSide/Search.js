import React, { useContext } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { MyContext } from '@/context/MyContext';

function Search() {
  const { searched, useSearched } = useContext(MyContext);

  return (
    <div className='mx-1 my-2 rounded-full flex bg-slate-500'>
      <SearchOutlinedIcon className='text-white m-1' />
      <input
        value={searched} // Use the value from the context as the input value
        onChange={(e) => useSearched(e.target.value)} // Update the context with the typed value
        placeholder='search'
        type='text'
        className='bg-slate-500 rounded-full w-[120px] focus:outline-none text-slate-100'
      />
    </div>
  );
}

export default Search;
