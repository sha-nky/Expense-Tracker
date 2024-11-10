import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./Helper";

// login function
export const loginFunction = async (number, password) => {
  return await commonrequest("POST", `${BACKEND_URL}/api/v1/users/login`, {
    number,
    password,
  });
};

// sign up  function
export const signupFunction = async (
  name,
  password,
  email,
  number,
) => {
  return await commonrequest("POST", `${BACKEND_URL}/api/v1/users/signup`, {
    name,
    password,
    email,
    number,
  });
};