import React, { useState, useContext, useEffect } from 'react';
import Poster from './Poster';
import Tweets from './Tweets';
import { MyContext } from '@/context/MyContext';
import supabase from '@/supabase/supabaseConfig';

function Feed() {
  const { user } = useContext(MyContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDataFromSupabase() {
      const { data, error } = await supabase.from('tweets').select();
      if (data) {
         
        setData(data.reverse()); // Store the fetched data in the state
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
        <Tweets key={item.id} tweet={item.text} username={item.email} time={item.created_at} />
      ))}

      {/**Tweets */}
    </div>
  );
}

export default Feed;
