"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/input/input";
import Button from "../components/Button";
import { AuthSocialButton } from "./components/AuthSocialButton";
import {BsGithub, BsGoogle} from "react-icons/bs";
import axios from "axios";

type Variant = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState("LOGIN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    if (variant === "REGISTER") {
      axios.post(`/api/register`,data)
    }
    if (variant === "LOGIN") {
    }
  };
  const socialAction = (action: string) => {
    setLoading(true);
    // SOCIAL SIGN IN
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "LOGIN" && (
            <>
              <Input
                label="Email"
                register={register}
                id="email"
                errors={errors}
                disabled={loading}
              />
              <Input
                label="Password"
                register={register}
                id="password"
                type="password"
                errors={errors}
                disabled={loading}
              />
            </>
          )}
          {variant === "REGISTER" && (
            <>
              <Input
                label="Name"
                register={register}
                id="name"
                errors={errors}
                disabled={loading}
              />
              <Input
                label="Email"
                register={register}
                id="email"
                type="email"
                errors={errors}
                disabled={loading}
              />
              <Input
                label="Password"
                register={register}
                id="password"
                type="password"
                errors={errors}
                disabled={loading}
              />
            </>
          )}
          <div >
            <Button disabled={loading} fullWidth type="submit">
              {variant === "LOGIN"?'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-center">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

            <div className="mt-6 flex gap-2">
            <AuthSocialButton onClick={()=>{socialAction('github')}} icon={BsGithub} />
            <AuthSocialButton onClick={()=>{socialAction('google')}} icon={BsGoogle} />
            </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN" ?  'Don\'t have an account?': 'Already have an account?'}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? 'Create an account': 'Log in' }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
