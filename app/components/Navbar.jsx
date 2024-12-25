"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import {
  BsHouseFill,
  BsList,
  BsMoonFill,
  BsSunFill,
  BsGithub,
  BsX,
} from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modeIcon, setModeIcon] = useState(<BsMoonFill />);
  const pathname = usePathname();

  // Theme Toggling
  const changeTheme = () => {
    const currentMode = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    const newMode = currentMode === "dark" ? "light" : "dark";
    document.body.classList.toggle("dark");
    setModeIcon(newMode === "dark" ? <BsSunFill /> : <BsMoonFill />);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      document.body.classList.add("dark");
      setModeIcon(<BsSunFill />);
    }
  }, []);

  return (
    <header className="w-full bg-white bg-opacity-40 dark:bg-opacity-40 shadow-md border border-slate-300 rounded-full flex items-center justify-between px-4 py-2 dark:bg-slate-800 dark:border-slate-700 sticky top-0 z-50 backdrop-blur-lg mb-5">
      {/* Mobile Menu Button */}
      <div
        className="p-2 bg-white dark:bg-violet-500 rounded-lg cursor-pointer text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <BsX /> : <BsList />}
      </div>

      {/* Navbar Links */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto dark:bg-slate-800 bg-white rounded-lg md:bg-transparent md:flex md:items-center md:justify-between transition-all duration-300 ease-in-out ${
          menuOpen ? "flex flex-col p-4" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 text-[14px]">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-slate-200 dark:bg-slate-800" : ""
              } flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700`}
            >
              <BsHouseFill /> <span className="ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "bg-slate-200 dark:bg-slate-800" : ""
              } flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "bg-slate-200 dark:bg-slate-800" : ""
              } flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700`}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Dropdown />
          </li>
        </ul>
      </nav>

      {/* Logo */}
      <div className="hidden md:flex items-center">
        <Image src="/logo.png" width={60} height={60} alt="logo" />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="https://www.github.com/hameed305"
          target="_blank"
          className="flex items-center gap-2 text-lg p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <BsGithub /> GITHUB
        </Link>
        <button
          onClick={changeTheme}
          className="flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          {modeIcon}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
