import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import TwitterIcon from '@mui/icons-material/Twitter';
import { CameraIcon } from '../icons/CameraIcon';

function ProfilePic() {
    const [image, setImage] = useState("");

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files[0])
  
      }
    };
 

  return (
    <div className='flex flex-col bg-slate-50 border rounded-2xl w-2/3 h-screen mx-auto text-center'>
      <h1 className='mb-5'>Welcome to Twitter</h1>
      <TwitterIcon className='twitterIcon text-6xl mx-auto my-3' />
      <label className='my-2'>Profile Image</label>
      
       <input onChange={onImageChange} type="file" class="text-sm text-grey-500
            file:mr-5 file:py-3 file:px-10
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-gradient-to-r file:from-blue-600 file:to-blue-400
            hover:file:cursor-pointer hover:file:opacity-80
          " />
    <div className=' mx-auto my-6'>
    <img className='rounded-full' id="target" src={image} />
    <button className='my-10 text-sm text-grey-500
            mr-5 py-3 px-10
            rounded-full border-0
            text-md font-semibold  text-white
            bg-gradient-to-r from-blue-600 to-blue-400
            hover:cursor-pointer hover:opacity-80'
    >
      Submit
    </button>
    
    </div>
     

      

    
    </div>
  );
}

export default ProfilePic;



