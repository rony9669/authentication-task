import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../contexts/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateName, verifyEmail } = useContext(AuthContext);

  // Signup using Email & Pass
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const address = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    //1. Create Account
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        //2. Update Name
        updateName(name)
          .then(() => {
            //3. Email verification
            verifyEmail()
              .then(() => {
                toast.success("Please check your email for verification link");
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center pt-8 mb-6">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Enter Your Phone Number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Your Address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>

        <p className="px-6 mt-2 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
