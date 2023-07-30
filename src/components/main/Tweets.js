import React from "react";
import { Avatar } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Tweets() {
  return (
    <div className="border-b border-spacing-1 flex ">
      <div className="">
        <Avatar />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1 className="">@username </h1>
          <h1 className="text-xs m-1"> n ago</h1>
        </div>
        <h1>here is some tweet text</h1>
        <FavoriteIcon className="text-red-500 "/>
        <h1 className="text-xs m-1">100</h1>

      </div>
    </div>
  );
}

export default Tweets;
