import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Search() {
  return (
    <div className='mx-1 my-2 rounded-full flex bg-slate-500 mr-10'>
      <SearchOutlinedIcon className='text-white m-1'/>
      <input type="text" className='bg-slate-500 '  />
    </div>
  )
}

export default Search