import React from "react";
import { Avatar } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Tweets({username,tweet,time}) {
  return (
    <div className="border-b border-spacing-1 flex ">
      <div className=" mx-1 my-1 ">
        <Avatar className="cursor-pointer hover:text-slate-300" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1 className="text-slate-50 hover:underline hover:text-slate-100 cursor-pointer">@{username} </h1>
          <h1 className="text-xs m-1 text-slate-50"> {time}</h1>
        </div>
        <h1 className="text-slate-50">{tweet}</h1>
        <FavoriteIcon className="text-red-500 hover:text-red-400 cursor-pointer"/>
        <h1 className="text-xs m-1 text-slate-500">100</h1>

      </div>
    </div>
  );
}

export default Tweets;
