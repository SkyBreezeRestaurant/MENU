import React from "react";
import logo from "../assets/logo.png"; // Assuming you have a logo image

function Header() {
  return (
    <header className="bg-white text-black p-8 flex items-center justify-center border-b border-gray-200 gap-4">
      {/* Replace with your actual logo image */}
      <img src={logo} alt="Restaurant Logo" className="h-20 w-20 " />
      <h1 className="text-3xl font-bold">Sky Breeze</h1>
    </header>
  );
}

export default Header;
