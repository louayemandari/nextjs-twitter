
function Signup() {
    const loginbar = 'border border-gray-300 focus:border-blue-500 my-2 focus:outline-none px-4 py-2 rounded-md'
    const buttonbar = 'twitterBlue border rounded-3xl text-slate-200 w-3/4 mx-auto h-[54px]  '
  return (
    <div className="flex flex-row">
    {/* Background Image Div */}
    <div className="login-background flex-1">
      {/* You can add any content inside this div */}
      hi
    </div>

    {/* Form Content Div */}
    <div className='flex flex-col my-6 mx-12 flex-1'>
      <h1 className='font-bold text-3xl'>Create your account on Twitter</h1>
      <input placeholder='Email' className={loginbar} type="text" />
      <input placeholder='password' className={loginbar} type="password" />
      <input placeholder='repeat password' className={loginbar} type="password" />
      <button className={buttonbar}>Login</button>
    </div>
  </div>
  )
}
export default Signup