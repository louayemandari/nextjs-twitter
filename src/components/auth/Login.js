import React, { useState } from "react";
import { useRouter } from "next/router";
import supabase from "@/supabase/supabaseConfig";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function lognow() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(data)

      if (data) {
        console.log(`you have successfully logged in to your account ${email}`);
        router.push("/hub");
      } else {
        console.log(`email or password is wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const buttonbar = "twitterBlue border rounded-3xl text-slate-200 w-3/4 mx-auto h-[54px]";

  return (
    <div className="flex flex-row w-screen h-screen bg-black">
      {/* Background Image Div */}
      <div className="login-background flex-1">
        {/* You can add any content inside this div */}
      </div>

      {/* Form Content Div */}
      <div className="flex flex-col my-6 mx-12 flex-1">
        <h1 className="text-3xl text-slate-50">Login to your account on Twitter</h1>
        <input
          placeholder="Email"
          className="border border-gray-700 bg-gray-800 text-slate-50 focus:border-blue-500 my-2 focus:outline-none px-4 py-2 rounded-md"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Password"
          className="border border-gray-700 bg-gray-800 text-slate-50 focus:border-blue-500 my-2 focus:outline-none px-4 py-2 rounded-md"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button onClick={lognow} className={buttonbar}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
