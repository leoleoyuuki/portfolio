"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {

  const [darkTheme, setDarkTheme] = React.useState(true);

  return (
    <div className="flex text-white justify-between p-5 px-14">
      <Link href={'/'}>
        <h1 className="text-white font-extrabold text-3xl tracking-wider">L<span className="text-blue-600" >/</span>Y</h1>
      </Link>
      <div onClick={() => setDarkTheme(!darkTheme) } >
        {darkTheme == true ?  <MdOutlineLightMode className="text-white" size={42} /> : <MdOutlineDarkMode className="text-white" size={42} />}
      </div>
    </div>
  );
}
