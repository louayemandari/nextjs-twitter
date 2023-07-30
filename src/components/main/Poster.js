import React from 'react'
import { Avatar } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ImageIcon from '@mui/icons-material/Image';
import { Button } from "@nextui-org/react";

function Poster() {
  return (
    <div className='flex flex-col border-b border-b-slate-50'>
        <div className='flex flex-row m-2 justify-between'>
            <h1 className='text-slate-50  '>Home</h1>
            <AutoAwesomeIcon className='text-slate-50 '/>



        </div>
        <div className='flex flex-row  m-1'>
            <div className=''><Avatar className='w-[80px] h-[80px]'>H</Avatar></div>
            <input type="text" className='bg-black text-slate-200 mx-1 w-full rounded  ' placeholder="What's Happening?"  />



        </div>
        <div className='flex flex-row m-1 justify-between'>
            <ImageIcon className='text-slate-100 w-[50px] h-[50px] mt-2 ml-2 hover:text-slate-200 cursor-pointer  '/>
            <Button rounded auto shadow color="primary" className='mr-5 '>Tweet</Button>

        </div>


    </div>
  )
}

export default Poster