import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-slate-500 bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl"> Blog Application</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-extrabold">
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/singleBlog"}>Single-Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header ;
