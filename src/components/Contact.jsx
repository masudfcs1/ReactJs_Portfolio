import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <p>Contact</p>
          <p>Submit the form below to get in touch with me</p>
        </div>
        <div>
          <form action="">
            <input
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              name="email"
              placeholder="Enter your Email"
            />
            <textarea
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="message"
              name="email"
              rows="10"
              placeholder="Enter your message"
            ></textarea>

            <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
