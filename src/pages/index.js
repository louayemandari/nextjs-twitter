import { useRouter } from "next/router";
export default function Home() {
  
  const loginbar = 'bg-slate-50 border rounded-3xl  text-twitter w-3/4 mx-auto h-[54px] my-5  '
  const Signupbar = 'twitterBlue border rounded-3xl text-slate-200 w-3/4 mx-auto h-[54px] my-5  '
  
  
  return (
    <div className="flex flex-row w-screen h-screen bg-black">
    {/* Background Image Div */}
    <div className="login-background flex-1">
      {/* You can add any content inside this div */}
      
    </div>

    {/* Form Content Div */}
    <div className='flex flex-col my-6 mx-12 flex-1'>
        <h1 className='text-slate-50 text-center text-3xl'>Log in to Twitter</h1>
        
        <button  className={Signupbar} onClick={()=>router.push('/Signup')}>Sign up</button>
        <button  className={loginbar}onClick={()=>router.push('/Login')}>Log in</button>

        </div>
    </div>
  );
}
