import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="header"
        />
      </div>

      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          placeholder="Enter your e-mail address"
          className="p-4 my-3 w-full bg-gray-700 rounded-lg"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full  bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="password"
          placeholder="Enter your password"
          className="p-4 my-3 w-full  bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-800 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white py-4 cursor-pointer "
          onClick={toggleSignUpForm}
        >
          {isSignInForm
            ? "New to Netflix?SignUp now"
            : "Already registered.Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
