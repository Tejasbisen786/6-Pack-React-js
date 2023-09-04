import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-teal-500 text-center p-5 font-bold text-2xl">
      <div className="links font-semibold text-base italic  text-white    ">
      <a href="" className="hover:bg-sky-700 p-2 mx-2 rounded-lg"> Home </a>
      <a href="" className="hover:bg-sky-700 p-2 mx-2 rounded-lg"> About  </a>
      <a href="" className="hover:bg-sky-700 p-2 mx-2 rounded-lg"> Contact </a>
      <a href="" className="hover:bg-sky-700 p-2 mx-2 rounded-lg">  Services </a>
      <a href="" className="hover:bg-sky-700 p-2 mx-2 rounded-lg"> More</a>
      </div>

      </nav>
    </>
  );
};

export default Header;
