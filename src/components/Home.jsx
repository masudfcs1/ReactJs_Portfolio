import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Imge from "../assets/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" text-gray-500 py-4 max-w-md ">
          <h2 className=" text-white text-4xl sm:text-7xl font-bold ">
            I'am full Stack Developer{" "}
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            I have 10 years of experience teaching and developing profession. I
            love to work on teaching and web application using several
            technologies.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6
             py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-200 ">
                <MdOutlineKeyboardArrowRight size={20} className=" ml-0.5" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Imge}
            alt="img"
            className=" rounded-2xl mx-auto w-2/3 md:w-3/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
