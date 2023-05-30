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
      style: " shadow-orange-500 ",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-orange-500 ",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: " shadow-orange-500 ",
    },
    {
      id: 5,
      src: nextjs,
      title: "NextJS",
      style: " shadow-orange-500 ",
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
      style: " shadow-orange-500 ",
    },
    {
      id: 7,
      src: graphql,
      title: "GrapQL",
      style: " shadow-orange-500 ",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: " shadow-orange-500 ",
    },
    {
      id: 9,
      src: html,
      title: "Html",
      style: " shadow-orange-500 ",
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
          <div className=" shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={html} alt="" className=" w-20 mx-auto" />
            <p className="mt-4">html</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expericence;
