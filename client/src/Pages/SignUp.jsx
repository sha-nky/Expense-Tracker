import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaAsterisk, FaSpinner } from "react-icons/fa";
import axios from 'axios';

import ToastMsg from "../Constants/ToastMsg";
import { lorem } from '../assets';

import { getAllUsers } from '../api/apiCalls';
import { signupFunction } from '../services/API';

function SignUpPage() {
  const navigate = useNavigate();
  const [formLoading, setFormLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const handleSignup = async (formData) =>{
    setFormLoading(true);
    try {
      const {name, password, email, number} = formData;

      const response = await signupFunction(
        name,
        password,
        email,
        number,
      );
      if(response.status === 201){
        ToastMsg(response.data.message, "success");
        navigate('/');
        reset();
      }
      else{
        ToastMsg(response.response.data.message, "error");
      }
    } catch (error) {
      ToastMsg("Server error! please try later", "error");
      console.log("Internal Server Error: ", error);
    } finally {
      setFormLoading(false);
    }
  }

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
            onSubmit={handleSubmit(handleSignup)}
            noValidate
          >
            <div className="mb-3 w-full px-2">
              <label 
                htmlFor="name" 
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Username{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                id="name"
                name="name"
                placeholder="Username"
                {...register("name", {
                  required: "Username is required",
                })}
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.name.message}
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
                htmlFor="number" 
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                Phone Number{" "}
                <FaAsterisk className="text-red-500 ml-[2px] text-[6px]" />
              </label>
              <input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.number ? "border-red-500" : ""
                }`}
                type="text"
                id="number"
                name="number"
                placeholder="Phone Number"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.number && (
                <div className="text-red-500 text-sm mt-1">{errors.number.message}</div>
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

            {/* <div className="mb-3 w-full px-2">
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
            </div> */}

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
          <Link to="/" className="hover:underline">
            Already have an account? Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
