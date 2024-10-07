"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleStartChat = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please fill in the username fields.";
    }
    if (!email.trim()) {
      newErrors.email = "Please fill in email fields.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please fill correct email id.";
    }
    if (!mobile.trim()) {
      newErrors.mobile = "Please fill in mobile number fields.";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Please fill correct phone number.";
    }

    if (Object.keys(newErrors).length === 0) {
      // Proceed with chat start
      console.log({ name, email, mobile });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      {isOpen ? (
        <div className="fixed top-4 right-4 py-4 w-4/5 sm:w-72 md:w-80 lg:w-96 border mt-24 h-3/4 md:h-5/6 bg-cyan-500 shadow-lg rounded-lg">
          <div>
            <div className="flex gap-4">
              <div className="ml-4 rounded-full w-12 h-12 bg-white"></div>
              <p className="font-bold">EventFesto.com</p>
            </div>
            <p className="text-xs text-gray-200 ml-24 -mt-6">
              is here to assist you
            </p>
            <button
              className="-mt-8 w-full flex justify-end"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center px-8 bg-white mt-10 h-full shadow-lg text-white rounded-t-3xl">
            <div className="flex items-center justify-center border w-44 p-2 rounded h-8 mb-4 text-gray-600 text-sm text-center">
              Usually replies instantly
            </div>
            <div className="-mt-12">
              <div className="shadow-xl rounded-lg border border-t-cyan-600 mt-16 px-4 py-6 border justify-center">
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="hover:border-b-cyan-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Your Primary Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="hover:border-b-cyan-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs italic">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="mobile"
                    >
                      Your Primary Mobile*
                    </label>
                    <div className="flex">
                      <select className="hover:border-b-cyan-500 shadow appearance-none border rounded-l w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="91">+91</option>
                        {/* Add other country codes as needed */}
                      </select>
                      <input
                        type="tel"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="hover:border-b-cyan-500 shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-red-500 text-xs italic">
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                  <div className="text-cyan-600 text-xs mb-4">
                    *Mandatory fields
                  </div>
                  <button
                    type="button"
                    onClick={handleStartChat}
                    className="bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                    Start chat
                  </button>
                </form>
              </div>
              <div className="text-center text-gray-400 text-xs py-2">
                by OneDirect
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 fixed w-38 bottom-4 right-4 bg-cyan-600 text-white py-4 px-4 rounded-full shadow-lg">
          <div className="flex w-8 h-8 rounded-full bg-white "></div>
          <button onClick={toggleChatBox}>Chat with us</button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
