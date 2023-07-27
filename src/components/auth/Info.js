import React, { useState } from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';

function Info() {
  


  return (
    <div className='flex flex-col bg-slate-50 border rounded-2xl w-2/3 h-screen mx-auto   text-center '>
        <h1 className='mb-5'>Welcome to Twitter</h1>
      <TwitterIcon className='twitterIcon text-6xl mx-auto text-center  justify-center my-3'/>
      <label className='my-2'>choose a username for you account</label>
      <input placeholder='@UserName' className='border border-gray-300 focus:border-blue-500 my-2 focus:outline-none px-4 py-2 rounded-md' type="text" />
      <label className='my-2'>Date Of birth</label>
      <div className='flex'>
        <input type="text" placeholder='day' className='w-1/3 mx-2 rounded-md '/>
        <input type="text" placeholder='month'className='w-1/3 mx-2 rounded-md '/>
        <input type="text" placeholder='year'className='w-1/3 mx-2 rounded-md '/>

      </div>
     
    </div>
  )
}

export default Info