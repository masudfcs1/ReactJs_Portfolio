import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className=" max-w-screen-lg p-4 mx-a
       flex flex-col w-full h-full"
      >
        <div className="text-4xl font-bold inline border-b-4 border-gray-500">
          <p>About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore
          nostrum, numquam cupiditate omnis mollitia velit in accusamus aliquid
          corrupti adipisci delectus natus dignissimos commodi! Libero, ipsam.
          Asperiores atque et fugiat minus aliquid nemo voluptatibus est,
          nostrum voluptatem eos temporibus consequuntur hic illo vel quo. Dicta
          soluta iusto voluptatem optio!{" "}
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iste
          optio, laboriosam, cum in pariatur, quisquam illum beatae modi
          explicabo blanditiis. Dolor sequi necessitatibus a unde, quidem
          deserunt illum, numquam corrupti laboriosam debitis eum repellendus
          consequuntur cumque asperiores veniam fugiat eveniet quisquam
          assumenda culpa voluptatum! Totam error enim tempora laudantium.
        </p>
      </div>
    </div>
  );
};

export default About;
