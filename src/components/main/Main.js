import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WhatsHappening from '../rightSide/WhatsHappening';
import Search from '../rightSide/Search';
import Feed from './Feed';
function Main() {
  return (
    <div className='flex w-screen h-screen twitterDark '>
      <div className='flex flex-col   text-center w-1/5 border-r-2 border-slate-700 sticky top-0 overflow-hidden  '>
        {/* Add 'overflow-hidden' class to hide the scroll bar */}
        <TwitterIcon className=' mx-auto my-10 text-4xl text-slate-50'/>
       <div className='flex flex-col justify-center text-center mx-auto my-10'>
       <HomeIcon className='text-4xl  text-slate-50'/>
        <MoreHorizOutlinedIcon className='text-4xl text-slate-50'/>
        <AccountCircleOutlinedIcon className='text-4xl text-slate-50'/>
       </div>
      </div>
      <div className=' w-3/5 overflow-y-scroll scrollbar-none '>
        {/* Use 'overflow-y-scroll' and 'scrollbar-none' classes */}
        <Feed/>
        
     
      </div>
      <div className=' border-l-2 border-slate-700 w-1/5 sticky top-0 overflow-hidden '>
        {/* Add 'overflow-hidden' class to hide the scroll bar */}
        <Search/>
        <WhatsHappening/>
      </div>
    </div>
  );
}

export default Main;
