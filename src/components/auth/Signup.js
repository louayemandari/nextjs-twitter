import supabase from "@/supabase/supabaseConfig";
import { useRouter } from "next/router";
import { useState } from 'react';

function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleAccountCreation = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Error creating account:', error.message);
      } else {
        console.log('Account created successfully!', user);
        router.push('/hub')
        // You can perform any other actions after successful account creation here.
      }
    } catch (error) {
      console.error('Error creating account:', error.message);
    }
  };


  


  
  const buttonbar =
    "twitterBlue border rounded-3xl text-slate-200 w-3/4 mx-auto h-[54px]  ";
  return (
    <div className="flex flex-row w-screen h-screen bg-black">
      {/* Background Image Div */}
      <div className="login-background flex-1">
        {/* You can add any content inside this div */}
      </div>

      {/* Form Content Div */}
      <div className="flex flex-col my-6 mx-12 flex-1 ">
        <h1 className="  text-3xl text-slate-50">
          Create your account on Twitter
        </h1>
        <input
          placeholder="Email"
          className="border border-gray-700 bg-gray-800 text-slate-50 focus:border-blue-500 my-2 focus:outline-none px-4 py-2 rounded-md"
          type="text"
          value={email} onChange={handleEmailChange}
        />
        <input
          placeholder="password"
          className="border border-gray-700 bg-gray-800 text-slate-50 focus:border-blue-500 my-2 focus:outline-none px-4 py-2 rounded-md"
          type="password"
          value={password} onChange={handlePasswordChange}
        />

        
<input
          placeholder="repeat password"
          className="border border-gray-700 bg-gray-800 text-slate-50 focus:border-blue-500 my-2 focus:outline-none px-4 py-2 rounded-md"
          type="password"
        />
        <button onClick={handleAccountCreation} className={buttonbar}>Login</button>
      </div>
    </div>
  );
}
export default Signup;
