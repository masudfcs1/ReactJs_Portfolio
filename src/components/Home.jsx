import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Imge from "../assets/HeroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>I'am full Stack Developer </h2>
          <p>
            I have 10 years of experience teaching and developing profession. I
            love to work on teaching and web application using several
            technologies.
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
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
