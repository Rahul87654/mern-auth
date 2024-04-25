// /* eslint-disable react/no-unescaped-entities */
// import { useState } from "react"
// import { Link } from "react-router-dom"
// const SignUp = () => {
//   const[loading , setloading] = useState(false);
//   const [error ,seterror] = useState(false);
//   const [ formdata , setformdata] = useState({});
//   const handlechange = (e) =>{
//     setformdata({...formdata,[e.target.id]: e.target.value});
//   }
//   const handlesubmit =   async (e)=>{
//     e.preventDefault();
//     try {
//       setloading(true)
//       const res = await fetch('/api/auth/signup' , {
//         method : 'POST',
//         headers : {
//           'Content-Type' : 'application/json',
//         },
//         body : JSON.stringify(formdata),
//       });
//       const data = await res.json() ;
//       console.log(data);
//       setloading(false)
//        if(data.success === false )
//        {
//         seterror(true)
//         return;
//        }
//        seterror(false)
//       console.log(data); { message : 'User Created Succesfilly'}
//     } catch (error) {
//        setloading(false)
//        seterror(true)
       
//     }
  
//   };
// console.log(formdata)
//   return (
//     <div className="p-3 max-w-lg text-center mx-auto">
//     <h1 className=" text-3xl  font-semibold m-7"> Sign Up  </h1>
//     <form  onSubmit={handlesubmit}  action="" className="flex flex-col gap-4">
//       <input type="text" placeholder="
//       username" id="username"  className="bg-slate-100 p-3" onChange={handlechange}/>
//       <input type="email" placeholder="
//       Email" id="email"  className="bg-slate-100 p-3" onChange={handlechange}/>
//       <input type="password" placeholder="
//       Password" id="password"  className="bg-slate-100 p-3" onChange={handlechange}/>
//       <button disabled ={loading}  className="bg-slate-700  text-white font-bold p-3 rounded-lg uppercase hover:opacity-95"> {loading ? 'Loading.. ' : 'Sign Up '} </button>
//     </form>
//      <div className="flex gap-4 mt-5">
//       <p> Have an Account</p>
//       <Link to = '/sign-in'>  <p> Sign In </p>  </Link>
//      </div>
//      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
//   </div>
//   )
// }

// export default SignUp

import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to sign up");
      }

      // Reset form and loading state on successful submission
      setFormData({ username: "", email: "", password: "" });
      setLoading(false);
      console.log(data); // Log successful response (if needed)
    } catch (error) {
      console.error("Sign up failed:", error.message);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg text-center mx-auto">
      <h1 className="text-3xl font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
      {error && <p className="text-red-700 mt-5">Something went wrong!</p>}
    </div>
  );
};

export default SignUp;
