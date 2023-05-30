import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import html from "../assets/html.png";
import android from "../assets/android.png";

const Expericence = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: " shadow-orange-500 ",
    },
    {
      id: 2,
      src: tailwind,
      title: "Tailwind",
      style: " shadow-blue-500 ",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500 ",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: " shadow-sky-500 ",
    },
    {
      id: 5,
      src: nextjs,
      title: "NextJS",
      style: " shadow-green-500 ",
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
      style: " shadow-green-300 ",
    },
    {
      id: 7,
      src: graphql,
      title: "GrapQL",
      style: " shadow-pink-500 ",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: " shadow-gray-300 ",
    },
    {
      id: 9,
      src: android,
      title: "Android",
      style: " shadow-purple-500 ",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the techologies I've worked with</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className=" w-20 mx-auto  " />
              <p className="mt-4"> {title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expericence;
