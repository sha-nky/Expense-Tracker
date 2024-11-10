import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaAsterisk, FaSpinner } from "react-icons/fa";

import ToastMsg from "../Constants/ToastMsg";
import { lorem } from '../assets';

import { getAllUsers } from '../api/apiCalls';

function SignUpPage() {
  const navigate = useNavigate();
  const [formLoading, setFormLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // Fetching all the users from sanity
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      if (data.error) {
        console.log(data.error)
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  // Form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Sign Up function
  const handleSignUp = async (formData) => {
    setFormLoading(true);

    try {
      const { username, password, phoneNumber, email, dateOfBirth } = formData;

      // Check if the username already exists
      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        ToastMsg("Username already exists", "error");
      } else {
        // Ideally, you would send a request to your backend to create a new user
        // Here we're just simulating a successful sign up
        ToastMsg("Sign Up Successful!", "success");
        navigate("/overview");
        reset();
      }
    } catch (error) {
      ToastMsg("Server error! Please try later", "error");
      console.log("Internal Server Error: ", error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div 
        className="flex-1 flex flex-col justify-center items-start p-10"
        style={{
          background: "linear-gradient(to right, #fff 70%, #38b2ac 95%)",
        }}
      >
        <img 
          src={lorem} 
          alt="Budgeting" 
          className="w-[30vw] h-[40vh] mb-4 rounded-2xl" 
        />
        <h1 className="text-2xl font-bold">Spend Wisely, Stress Less -</h1>
        <h2 className="text-lg mt-2">Student Budgeting Made Easy.</h2>
      </div>

      <div 
        className="flex-1 p-10 flex flex-col justify-center items-center"
        style={{
          background: "linear-gradient(to right, #38b2ac 80%, #fff 200%)",
        }}
      >
        <div className='flex flex-col items-center justify-center bg-gray-200 w-[50%] p-8 rounded-2xl'>
          <h2 className="text-2xl font-bold text-teal-400 mb-6">SIGN UP</h2>
          <form 
            className="w-full max-w-sm" 
            onSubmit={handleSubmit(handleSignUp)}
            noValidate
          >
            <div className="mb-3 w-full px-2">
              <label 
                htmlFor="username" 
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Username{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.username ? "border-red-500" : ""
                }`}
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </div>
              )}
            </div>

            <div className="mb-3 w-full px-2">
              <label 
                htmlFor="password" 
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Password{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password.message}</div>
              )}
            </div>

            <div className="mb-3 w-full px-2">
              <label 
                htmlFor="phoneNumber" 
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Phone Number{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.phoneNumber && (
                <div className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</div>
              )}
            </div>

            <div className="mb-3 w-full px-2">
              <label 
                htmlFor="email" 
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Email{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-3 w-full px-2">
              <label 
                htmlFor="dateOfBirth" 
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Date of Birth{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.dateOfBirth ? "border-red-500" : ""
                }`}
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Date of Birth"
                {...register("dateOfBirth", {
                  required: "Date of Birth is required",
                })}
              />
              {errors.dateOfBirth && (
                <div className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</div>
              )}
            </div>

            <div className="mt-3 text-center">
              <button
                type="submit"
                disabled={formLoading}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  formLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {formLoading ? (
                  <>
                    <FaSpinner className="mr-3 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
        <p className="text-white mt-4">
          <a href="#" className="hover:underline">Already have an account? Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
