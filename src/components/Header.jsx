"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from '../utils/Theme';

export default function Header() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div className={`flex justify-between p-5 px-14 ${darkTheme ? 'text-white'  : 'text-black bg-gray-100'}`}>
      <Link href={'/'}>
        <h1 translate="no" className="font-extrabold text-3xl tracking-wider">
          L<span className="text-blue-600">/</span>Y
        </h1>
      </Link>
      <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="transition-all focus:outline-none">
        {darkTheme ? 
          <MdOutlineLightMode className="transition-all" size={42} /> : 
          <MdOutlineDarkMode className="transition-all" size={42} />
        }
      </button>
    </div>
  );
}
