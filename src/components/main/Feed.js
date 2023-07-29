import React from 'react'
import Poster from './Poster'
import Tweets from './Tweets'

function Feed() {
  return (
    <div>
        {/**poster componet for posting */}
        <Poster/>

        {/**Tweets */}
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>

    </div>
  )
}

export default Feed