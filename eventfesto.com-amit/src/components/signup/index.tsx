"use client";

import axios, { AxiosError } from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginModal from "../loginModal";
import SignupOtp from "./signupOtp";

interface FormField {
  label: string;
  type: string;
  name: string;
  autoComplete: string;
}

const formFields: FormField[] = [
  {
    label: "First Name",
    type: "text",
    name: "firstName",
    autoComplete: "given-name",
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastName",
    autoComplete: "family-name",
  },
  {
    label: "Email Address",
    type: "email",
    name: "email",
    autoComplete: "email",
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phoneNumber",
    autoComplete: "tel",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    autoComplete: "new-password",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    autoComplete: "new-password",
  },
];

const Index: React.FC = () => {
  const baseUrl = process.env.API_BASE_URL;
  useEffect(() => {
    const handlePopstate = () => {
      setIsRegistered(false); // Reset isRegistered when navigating back
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const isModalOpenSignup = true;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "+91",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if password and confirm password are different
    if (name === "password" || name === "confirmPassword") {
      if (formData.password !== value) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { confirmPassword, ...newFormData } = formData;
      const response = await axios.post(
        `${baseUrl}auth/user-signup`,
        newFormData
      );

      toast.success("🦄 Wow your account has been created!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      if (response.status === 200) {
        const timeoutId = setTimeout(() => {
          setIsRegistered(true);
        }, 4000);

        return () => clearTimeout(timeoutId);
      }
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      toast.error(`🦄 ! ${axiosError.response?.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center md:p-16 mb-10">
      <div className="w-full md:w-5/6 flex justify-center md:border-2 md:border-cyan-500">
        <div
          className={`${isRegistered ? "w-3/6" : "w-2/6"} w-2/6 border-r-2 border-cyan-500 hidden md:block`}
        >
          <Image
            src="/img3.jpg"
            alt="wedding"
            width={500}
            height={600}
            priority={true}
            className="w-full h-full object-cover"
          />
        </div>
        {!isRegistered && (
          <div
            className={`${isRegistered ? "w-3/6" : "w-4/6"} md::w-4/6 w-full h-fit bg-white px-8 md:px-16 py-8`}
          >
            <div className="flex justify-center text-lg md:text-3xl font-bold mb-8">
              User Sign Up
            </div>
            <div>
              <form onSubmit={handleSubmit} className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 md:gap-x-12">
                  {formFields.map((field) => (
                    <div key={field.name} className="relative">
                      {" "}
                      {/* Add 'relative' class */}
                      <label
                        htmlFor={field.name}
                        className="text-sm font-bold flex"
                      >
                        {field.label} <p className="text-red-500 ml-1">*</p>
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        autoComplete={field.autoComplete}
                        value={formData[field.name as keyof typeof formData]}
                        placeholder={` ${field.name}`}
                        onChange={handleChange}
                        className="p-2 border focus:ring-indigo-500 outline-none focus:border-blue-500 w-full shadow-md text-xs md:text-sm rounded-md"
                        required
                      />
                      {/* Conditionally render error message */}
                      {field.name === "confirmPassword" && passwordError && (
                        <p className="text-red-500 text-sm">{passwordError}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between gap-4 mt-6">
                  <p className="text-xs mt-4">
                    By submitting this form, you agree to our{" "}
                    <span className="text-red-500 cursor-pointer underline">
                      terms and conditions
                    </span>
                  </p>
                  <button
                    type="submit"
                    className={`w-32 flex justify-center items-center md:py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>

            <div className="flex justify-center mt-8">
              <p className="text-md md:text-xl"> Already have an account?</p>
              <button
                className="text-red-500 underline focus:outline-none text-lg ml-2"
                onClick={openModal}
              >
                Log In
              </button>
            </div>
          </div>
        )}
        <div className={`${isRegistered ? "w-3/6" : ""}`}>
          {isRegistered && <SignupOtp email={formData.email} type="user" />}
        </div>
      </div>

      {isModalOpen && (
        <LoginModal
          onClose={closeModal}
          isModalOpenSignup={isModalOpenSignup}
        />
      )}
    </div>
  );
};

export default Index;
