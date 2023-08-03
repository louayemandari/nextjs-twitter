import React, { useState, useEffect } from 'react';
import supabase from '@/supabase/supabaseConfig';
import Tweets from './main/Tweets';
import { timeAgo } from '@/functions/timeAgo';

function SearchFeed({ value }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace 'tweets' with the actual name of your table in Supabase and 'text' with the column name
        const { data: records, error } = await supabase
          .from('tweets')
          .select('*') // You can replace '*' with the specific columns you want to fetch
          .ilike('text', `%${value}%`) // Using ilike for case-insensitive search
          .limit(10);

        if (error) {
          throw new Error(error.message);
        }

        setData(records);
      } catch (error) {
        console.error('Error fetching data from Supabase:', error);
      }
    }

    fetchData();
  }, [value]);

  return (
    <div className='mt-5 text-slate-50'>
      {data.map((item) => (
        <Tweets
          key={item.tweetid}
          tweet={item.text}
          username={item.username}
          time={timeAgo(item.datetime)}
        />
      ))}
    </div>
  );
}

export default SearchFeed;
