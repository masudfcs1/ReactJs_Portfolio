import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto
       flex flex-col w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl mt-10 font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          ipsum dolor sit amet consectetur adipisicing elit. Minus dolore
          nostrum, numquam cupiditate omnis mollitia velit in accusamus aliquid
          corrupti adipisci delectus natus dignissimos commodi! Libero, ipsam.
          Asperiores atque et fugiat minus aliquid nemo voluptatibus est,
          nostrum voluptatem eos temporibus consequuntur hic illo vel quo. Dicta
          soluta iusto voluptatem aaaa!{" "}
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iste
          optio, laboriosam, cum in pariatur, quisquam illum beatae modi
          uptatum! Totam error enim tempora laudantium.
        </p>
      </div>
    </div>
  );
};

export default About;
