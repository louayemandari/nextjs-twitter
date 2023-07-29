import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Search() {
  return (
    <div className='mx-1 my-2 rounded-full flex bg-slate-500 '>
      <SearchOutlinedIcon className='text-white m-1'/>
      <input placeholder='search' type="text" className='bg-slate-500 rounded-full w-[120px] focus:outline-none text-slate-100 '  />
    </div>
  )
}

export default Search