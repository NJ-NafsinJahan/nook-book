"use client";

import { Button, Input } from "@heroui/react";

import Link from "next/link";
import toast from "react-hot-toast";
import { Mail, Lock, ArrowRight } from "lucide-react";

import Image from "next/image";
import { authClient, signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget);
    // console.log(formData);

    const loginData = Object.fromEntries(formData.entries());
    // console.log(registerData);

    const { data, error } = await signIn.email({
      ...loginData,
      callbackURL: "/",
    });
    // const { data: tokenData } = await authClient.token();
    // console.log(tokenData);

    // if error
    if (error) {
      toast.error("Login failed");
      return;
    }
    // router.push("/");
  };
  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50">
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                <span className="bg-linear-to-r from-[#FF006E] to-[#FF5E62] bg-clip-text text-transparent">
                  Welcome
                </span>{" "}
                Back !
              </h2>
              <p className="text-slate-500 font-medium">
                Your next productive session starts here.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                variant="bordered"
                className="w-full h-12 font-bold rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors gap-3"
              >
                {/* <Image
                  width={20}
                  height={20}
                  src="https://www.google.com/favicon.ico"
                  className="w-5 h-5"
                  alt="Google"
                /> */}
                Sign in with Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
                  Or with email
                </span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  required
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  startContent={<Mail className="w-4 h-4 text-slate-400" />}
                  className="border-2 border-slate-200 hover:border-pink-600/50 focus-within:border-pink-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl "
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Password
                </label>
                <Input
                  id="password"
                  required
                  placeholder="••••••••"
                  type="password"
                  name="password"
                  startContent={<Lock className="w-5 h-5 text-slate-400" />}
                  className="border-2 border-slate-200 hover:border-pink-600/50 focus-within:border-pink-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl "
                />
              </div>
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm text-[#FF006E] hover:underline underline-offset-4 transition-all"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                color="primary"
                type="submit"
                className="w-full h-10 text-[20px] font-bold  bg-linear-to-r from-[#FF006E] to-[#FF5E62] rounded-2xl shadow-xl shadow-pink-600/20 group"
              >
                LogIn{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-600 font-medium">
                New to BooKnook?{" "}
                <Link
                  href="/register"
                  className="text-[#FF006E] hover:underline underline-offset-4 transition-all text-[16px]"
                >
                  {" "}
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
