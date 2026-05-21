"use client";

import { useState, useEffect } from "react";

import {
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
  MapPinHouse,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

// import logo from "@/assets/logo1.PNG";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = useSession();
  console.log(session);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-[#FF006E] rounded-xl group-hover:rotate-12 transition-transform">
                <MapPinHouse className="w-6 h-6 font-bold text-white " />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#1E103F]">
                BooKnooK
              </span>
            </Link>
          </div>

          {/* Btn */}

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="font-medium text-[#1D1B36] hover:text-[#FF006E] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="font-medium text-[#1D1B36] hover:text-[#FF006E] transition-colors"
            >
              Rooms
            </Link>
            <Link
              href="/add-room"
              className="font-medium text-[#1D1B36] hover:text-[#FF006E] transition-colors"
            >
              Add Rooms
            </Link>
            {/* <Link
              href="/dashboard"
              className="font-medium text-[#1D1B36] hover:text-[#FF006E] transition-colors"
            >
              Dashboard
            </Link> */}
          </div>

          {/* Login & register */}
          <div className="hidden md:flex items-center gap-4">
            {!isPending && !session ? (
              <>
                <Link
                  href="/login"
                  className="font-normal text-[16px] text-[#1D1B36] hover:text-[#FF006E] transition-colors"
                >
                  Login
                </Link>
                <Link href="/register">
                  <Button
                    color="primary"
                    className="font-normal text-[16px] rounded-full px-8 shadow-lg bg-linear-to-br from-[#FF006E] via-[#FF3D7F] to-[#FF5E62] shadow-pink-600/20"
                  >
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
                  <Image
                    src={
                      session?.user?.image ||
                      "https://i.ibb.co.com/MkMtcspH/Img3-jpg.jpg"
                    }
                    alt="avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover ring-3 ring-blue-600/10"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-[18px] font-bold truncate max-w-25">
                      {session?.user?.name}
                    </p>
                  </div>
                </button>
                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="font-bold text-sm">Welcome back!</p>
                    <p className="text-xs truncate text-slate-500">
                      {session?.user?.email}
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors"
                  >
                    <User className="w-4 h-4" /> Settings
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 text-[16px] text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" /> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* hidden btn */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ************************************ */}
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Home
          </Link>
          <Link
            href="/rooms"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Rooms
          </Link>
          <Link
            href="/add-room"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Add Room
          </Link>
          {/* <Link
            href="/dashboard"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Dashboard
          </Link> */}
          <div className="pt-4 border-t border-border mt-4">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/login">
                <Button href="/login" variant="outline" className="rounded-xl">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button href="/register" color="danger" className="rounded-xl">
                  Register
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Account
              </p>
              <button
                onClick={handleLogOut}
                className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
