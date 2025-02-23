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
    <div className="w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-10 lg:px-20">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">LET'S WORK</h1>
        <h1 className="text-emerald-600 font-bold text-4xl md:text-6xl lg:text-8xl">TOGETHER</h1>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-2xl">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <div className="flex flex-col flex-1">
            <label className="text-emerald-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#1B1B1B] h-[40px] rounded-lg p-3 text-white"
              required
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-emerald-600 mb-1">Email</label>
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

        <div className="mt-4">
          <label className="text-emerald-600 mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Work Inquiry"
            className="bg-[#1B1B1B] h-[40px] rounded-lg p-3 text-white w-full"
            required
          />
        </div>

        <div className="mt-4">
          <label className="text-emerald-600 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-[#1B1B1B] h-[120px] rounded-lg p-3 text-white w-full"
            required
          ></textarea>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="text-white bg-amber-700 w-full rounded-lg text-center h-[45px] flex justify-center items-center hover:bg-amber-600 transition duration-300"
          >
            {btnName}
          </button>
        </div>
      </form>
      <div className="h-[100px]"></div>
    </div>
  );
};
