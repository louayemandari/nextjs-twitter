import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WhatsHappening from '../rightSide/WhatsHappening';
import Search from '../rightSide/Search';
import Feed from './Feed';
function Main() {
  return (
    <div className='flex w-screen h-screen'>
      <div className='bg-blue-300 w-1/5 border-r-2 border-slate-700 sticky top-0 overflow-hidden  '>
        {/* Add 'overflow-hidden' class to hide the scroll bar */}
        left
      </div>
      <div className='bg-red-400 w-3/5 overflow-y-scroll scrollbar-none '>
        {/* Use 'overflow-y-scroll' and 'scrollbar-none' classes */}
        <Feed/>
        
     
      </div>
      <div className='bg-yellow-200 border-l-2 border-slate-700 w-1/5 sticky top-0 overflow-hidden hidden md:block '>
        {/* Add 'overflow-hidden' class to hide the scroll bar */}
        <Search/>
        <WhatsHappening/>
      </div>
    </div>
  );
}

export default Main;
