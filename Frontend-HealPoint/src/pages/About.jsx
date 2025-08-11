import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.About_Image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to HealPoint, your reliable partner in managing healthcare
            with ease and efficiency. At HealPoint, we recognize the challenges
            people face when booking doctor appointments and keeping track of
            their health records.
          </p>

          <p>
            HealPoint is dedicated to advancing healthcare technology. We
            continuously work to enhance our platform by integrating the latest
            innovations, ensuring a smooth user experience and top-quality
            service. Whether you’re scheduling your first consultation or
            managing ongoing care, HealPoint is here to support you at every
            step.
          </p>

          <b className="text-gray-800">Our Vision</b>

          <p>
            At HealPoint, our vision is to create a seamless healthcare journey
            for every user. We strive to connect patients and healthcare
            providers, making access to care simple, timely, and convenient
            whenever you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          REASONS TO{" "}
          <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PRODUCTIVITY:</b>
          <p>Effortless booking that adapts to your hectic schedule.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>ACCESSIBILITY:</b>
          <p>
            Easy connection to reliable healthcare experts in your community.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CUSTOMIZATION:</b>
          <p>Personalized alerts and guidance to maintain your wellness.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
