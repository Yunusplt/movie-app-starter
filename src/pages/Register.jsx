import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContexx } from "../context/AuthContext";

const Register = () => {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [firstName,setFirstName] = useState()
  const [lastName,setLastName] = useState()

  const {createUser, signUpProvider} = useContext(AuthContexx)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const displayName = `${firstName} ${lastName}`;
    createUser(email,password, displayName)
    console.log(displayName);
  }

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form
          onSubmit={handleSubmit}
          className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]"
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="">
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="">
              Last Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="">
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="">
              Password
            </label>
          </div>
          <button type="submit" className="btn-danger">
            Register
          </button>
          <button
            type="button"
            className="btn-danger flex justify-between items-center"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
