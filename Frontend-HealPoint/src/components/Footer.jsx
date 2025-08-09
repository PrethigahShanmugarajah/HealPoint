import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*--------Left Section --------*/}
        <div>
          <img className="mb-5 w-40" src={assets.Logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            HealPoint is dedicated to connecting you with trusted healthcare
            professionals quickly and easily, ensuring quality care at your
            fingertips.
          </p>
        </div>

        {/*--------Center Section --------*/}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*--------Right Section --------*/}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>support@healpoint.com</li>
            <li>+94 00 000 0000</li>
          </ul>
        </div>
      </div>

      {/*------- Copyright Text --------*/}
      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright © {new Date().getFullYear()} HealPoint. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
