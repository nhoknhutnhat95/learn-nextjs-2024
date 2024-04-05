import ButtonLogin from "@/components/button-login";
import React from "react";
import {readFileSync} from 'fs'
import { redirect } from "next/navigation";
import LoginForm from "./components/login-form";

const LoginPage = async () => {
  
  return (
    <div>
      Login nè:
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
