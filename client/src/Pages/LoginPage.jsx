import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="flex-1 bg-white p-10 flex flex-col justify-center items-start">
        <img src="https://www.solopress.com/blog/wp-content/uploads/2020/11/Lorem-Ipsum.jpg" alt="Budgeting" className="w-20 mb-4" />
        <h1 className="text-2xl font-bold">Spend Wisely, Stress Less –</h1>
        <h2 className="text-lg mt-2">Student Budgeting Made Easy.</h2>
      </div>

      <div className="flex-1 bg-teal-300 p-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-white mb-6">LOGIN</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="username" className="block text-white mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full p-2 rounded bg-white text-gray-800"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 rounded bg-white text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-teal-500 font-bold py-2 rounded hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>
        <p className="text-white mt-4">
          <a href="#" className="hover:underline">Forgot Password?</a>
        </p>
        <p className="text-white mt-2">
          Don't have an account yet? <a href="#" className="hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
