import React, { useState,useContext } from 'react';
import { Avatar, Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ImageIcon from '@mui/icons-material/Image';
import supabase from '@/supabase/supabaseConfig';
import { MyContext } from '@/context/MyContext';
import {timeAgo} from '@/functions/timeAgo';
function Poster() {
  const {user} = useContext(MyContext)
  const [textTweet, setTextTweet] = useState('');
  const supabaseTimestamp = '2023-07-30T15:00:00.000Z'; // Replace this with your Supabase timestamp

  

  const handleSubmit = async () => {
    // Create a new tweet object
    const tweet = {
      text: textTweet,
      email:user.user.email
    };
    
    console.log('Submitting tweet:', tweet);
    
    // Save the tweet to Supabase
    const { data, error } = await supabase.from('tweets').insert(tweet);
    console.log('Inserted data:', data);
    console.log('Error:', error);
    console.log(data)
    const timeAgoString = timeAgo(supabaseTimestamp);
    console.log(timeAgoString);

    // Clear the text input
    setTextTweet('');
  };

  return (
    <div className='flex flex-col border-b border-b-slate-50'>
      <div className='flex flex-row m-2 justify-between'>
        <h1 className='text-slate-50'>Home</h1>
        <AutoAwesomeIcon className='text-slate-50' />
      </div>
      <div className='flex flex-row m-1'>
        <div className=''>
          <Avatar className='w-[80px] h-[80px]'>H</Avatar>
        </div>
        <input
          onChange={(e) => setTextTweet(e.target.value)}
          value={textTweet} 
          type='text'
          className='bg-black text-slate-200 mx-1 w-full rounded'
          placeholder="What's Happening?"
        />
      </div>
      <div className='flex flex-row m-1 justify-between'>
        <ImageIcon className='text-slate-100 w-[50px] h-[50px] mt-2 ml-2 hover:text-slate-200 cursor-pointer' />
        <Button onClick={handleSubmit} variant='contained' color='primary' className='mr-5'>
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default Poster;
