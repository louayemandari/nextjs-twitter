import React, { useState, useContext, useEffect } from 'react';
import Poster from './Poster';
import Tweets from './Tweets';

import supabase from '@/supabase/supabaseConfig';
import { timeAgo } from '@/functions/timeAgo';
import { MyContext } from '@/context/MyContext';
function Feed() {

  const [data, setData] = useState([]);
  const { searched, useSearched } = useContext(MyContext);

  useEffect(() => {
    async function fetchDataFromSupabase() {
      const { data, error } = await supabase
  .from('tweets')
  .select('*')
  .order('datetime', { ascending: false })
  .limit(20);

      if (data) {
         
        setData(data); // Store the fetched data in the state
      }
      if (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchDataFromSupabase();
  }, [data]);

  return (
    <div>
      {/**poster component for posting */}
      <Poster />

      
      {data.map((item) => (
        <Tweets key={item.id} tweet={item.text} username={item.username} time={timeAgo(item.datetime)} />
      ))}

      {/**Tweets */}
    </div>
  );
}

export default Feed;
