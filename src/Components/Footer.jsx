import React, { useState } from "react";

export const Footer = () => {
  const [btnName, setBtnName] = useState("Submit");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setBtnName("Thank You!");

    setTimeout(() => {
      setBtnName("Submit");
    }, 2000);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-[70%] h-[850px]">
      <div>
        <h1 className="text-white text-8xl font-bold">LET'S WORK</h1>
        <h1 className="text-emerald-600 text-8xl font-bold">TOGETHER</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-col m-3">
          <div className="h-[30px]"></div>

          <div className="flex flex-row space-x-3">
            <div className="flex flex-col flex-1">
              <span className="text-emerald-600">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-[#1B1B1B] h-[40px] rounded-lg p-3 text-white"
                required
              />
            </div>

            <div className="flex flex-col flex-1">
              <span className="text-emerald-600">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your@gmail.com"
                className="bg-[#1B1B1B] h-[40px] rounded-lg p-3 text-white"
                required
              />
            </div>
          </div>

          <div className="h-[30px]"></div>

          <div className="flex-1 flex flex-col">
            <span className="text-emerald-600">Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Work"
              className="bg-[#1B1B1B] h-[40px] rounded-lg p-3 text-white"
              required
            />
          </div>

          <div className="h-[30px]"></div>

          <div className="flex-1 flex flex-col">
            <span className="text-emerald-600">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-[#1B1B1B] h-[100px] rounded-lg p-3 text-white"
              required
            ></textarea>
          </div>

          <div className="h-[30px]"></div>

          <div className="flex flex-1 w-full">
            <button
              type="submit"
              className="text-white bg-amber-700 flex-1 rounded-lg text-center h-[40px] flex justify-center items-center hover:bg-amber-600 transition duration-300"
            >
              {btnName}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
