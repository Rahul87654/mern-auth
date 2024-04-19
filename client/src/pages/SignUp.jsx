/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
const SignUp = () => {
  return (
    <div className="p-3 max-w-lg text-center mx-auto">
    <h1 className=" text-3xl  font-semibold m-7"> Sign Up Page </h1>
    <form action="" className="flex flex-col gap-4">
      <input type="text" placeholder="
      username" id="username"  className="bg-slate-100 p-3"/>
      <input type="email" placeholder="
      Email" id="email"  className="bg-slate-100 p-3"/>
      <input type="password" placeholder="
      Password" id="password"  className="bg-slate-100 p-3"/>
      <button className="bg-slate-700  text-white font-bold p-3 rounded-lg uppercase hover:opacity-95"> Sign Up </button>
    </form>
     <div className="flex gap-4 mt-5">
      <p> Have an Account</p>
      <Link to = '/sign-in'>  <p> Sign In </p>  </Link>
     </div>
  </div>
  )
}

export default SignUp
