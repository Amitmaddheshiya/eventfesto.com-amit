"use client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Bounce, toast } from "react-toastify";
import LoginOtp from "./loginOtp";

interface FieldConfig {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  options?: string[]; // Add options property to FieldConfig interface
  required?: boolean;
}

const fieldConfigs: FieldConfig[] = [
  {
    id: "firstName",
    label: "FirstName",
    type: "text",
    name: "firstName",
    placeholder: "Enter your firstName",
    required: true,
  },
  {
    id: "lastName",
    label: "LastName",
    type: "text",
    name: "lastName",
    placeholder: "Enter your lirstName",
    required: true,
  },
  {
    id: "1email",
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email address",
    required: true,
  },

  {
    id: "phoneNumber",
    label: "PhoneNumber",
    type: "text",
    name: "phoneNumber",
    placeholder: "Enter your mobile number",
    required: true,
  },
  {
    id: "2password",
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    required: true,
  },

  {
    id: "businessName",
    label: "Business Name",
    type: "text",
    name: "businessName",
    placeholder: "Enter the name of your Business",
    required: true,
  },
  {
    id: "type",
    label: "Business Type",
    type: "select", // Change type to "select"
    name: "type",
    placeholder: "Select the type of your Business", // Change placeholder
    options: [
      // Add default option
      "Venues",
      "Decorators",
      "Photographers",
      "Invitation Card",
      "Makeup Artists",
      "Transport/Car Renter",
      "Mehandi Artists",
      "Dj's",
      "Entertainment",
      "Choreographers",
      "Hospitaility",
      "Jewellery",
      "Wedding Wear",
      "Gifts",
      "Honeymoons",
      "Pandits",
    ],
    required: true,
  },
  {
    id: "comment",
    label: "Comment",
    type: "text",
    name: "comment",
    placeholder: "Enter your comment",
    required: false,
  },
  {
    id: "country",
    label: "Country",
    type: "select",
    name: "country",
    placeholder: "Select your country",
    options: [
      // Add default option
      "India",
    ],
    required: true,
  },
  {
    id: "state",
    label: "State",
    type: "select",
    name: "state",
    placeholder: "Select your state",
    options: [
      // Add default option
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Delhi",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "India also has seven Union Territories",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Daman and Diu",
      "Lakshadweep",
      "Puducherry",
      "Ladakh",
    ],
    required: true,
  },
  {
    id: "city",
    label: "City",
    type: "select",
    name: "city",
    placeholder: "Select your city",
    options: [
      // Add default option
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Kolkata",
      "Chennai",
      "Hyderabad",
      "Ahmedabad",
      "Pune",
      "Surat",
      "Jaipur",
      "Lucknow",
      "Kanpur",
      "Nagpur",
      "Indore",
      "Thane",
      "Bhopal",
      "Visakhapatnam",
      "Pimpri-Chinchwad",
      "Patna",
      "Vadodara",
    ],
    required: true,
  },
  {
    id: "objective",
    label: "Objective",
    type: "select", // Change type to "select"
    name: "objective",
    placeholder: "Select the type of your objective", // Change placeholder
    options: [
      // Add default option
      "Get more business",
      "Get more visibility",
      "both",
    ],
    required: true,
  },
];

const VendorRegistrationForm: React.FC = () => {
  const baseUrl = process.env.API_BASE_URL;
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({
    phoneNumber: "+91",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {}
  );
  const [error, setError] = useState<string | null>(null);

  const handleFieldBlur = (field: string) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      // Check if the value starts with "+91", if yes, keep it as is
      if (value.startsWith("+91")) {
        setFormData({ ...formData, [name]: value });
      } else {
        // If it doesn't start with "+91", prepend it to the value
        setFormData({ ...formData, [name]: "+91" + value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    const emptyFields = fieldConfigs.filter(
      (field) => field.required && !formData[field.name]
    );
    if (emptyFields.length > 0) {
      setError("Please fill in all required fields.");
      return;
    }
    console.log(formData);
    try {
      const response = await axios.post(
        `${baseUrl}auth/vendor-signup`,
        formData
      );

      toast.success(
        ` Wow your account has been created!🦄  ${response?.data.message}`,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );

      const timeoutId = setTimeout(() => {
        setIsModalOpen(true);
      }, 2000);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      toast.error(`🦄 ! ${axiosError.response?.data.message}`, {
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
    }
  };

  const handleVendorLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}auth/vendor-login`, {
        email,
        password,
      });

      console.log(response.data);
      toast.success(
        `🦄 Wow Now you can use eventfesto.com ${response?.data.message}`,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      setTimeout(() => {
        router.push("/vendors-dashboard-project");
      }, 2000);
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      console.log(error);
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

  return (
    <div className="flex flex-col items-center w-full bg-white mt-4 md:mt-12 mb-4 md:mb-10">
      <h1 className="text-xs md:text-2xl font-medium md:font-bold font-serif">
        Fill In The Form Below To Get Started On Eventfesto
      </h1>
      <div className="flex mt-6 gap-4 text-xs md:text-lg">
        <p>VENDOR REGISTRATION</p>
        <p className="text-cyan-400">VENUE REGISTRATION</p>
      </div>
      <div className="w-full md:w-5/6 md:flex gap-10 mt-6">
        <div className="w-full md:w-4/6">
          <div className="w-full md:border mt-2 p-4 md:p-8">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {fieldConfigs.map((field) => {
                const isSelect = field.type === "select";
                const isRequired = field.required;

                let fieldElement = null;

                if (isSelect) {
                  fieldElement = (
                    <select
                      className="mt-2 text-xs border border-b-2 border-x-0 border-t-0 focus:border-b-2 focus:border-cyan-500 outline-none"
                      id={field.id}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      onBlur={() => handleFieldBlur(field.name)}
                      required={isRequired}
                    >
                      <option
                        style={{ fontWeight: "bold" }}
                        className="bg-blue-500 text-white"
                      >
                        {field.placeholder}
                      </option>
                      {field.options?.map((option, index) => (
                        <option
                          key={option}
                          value={option}
                          className={`${option == "India also has seven Union Territories" ? "font-bold bg-blue-500 text-white" : ""}`}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  );
                } else {
                  fieldElement = (
                    <input
                      className="mt-2 text-xs border border-b-2 border-x-0 border-t-0 focus:border-b-2 focus:border-cyan-500 outline-none"
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      onBlur={() => handleFieldBlur(field.name)}
                      required={isRequired}
                    />
                  );
                }

                return (
                  <div key={field.id} className="flex flex-col">
                    <label
                      htmlFor={field.id}
                      className="block text-sm  font-medium"
                    >
                      {field.label}:{" "}
                      {isRequired && <span className="text-cyan-500">*</span>}
                    </label>
                    {fieldElement}
                    {touchedFields[field.name] && !formData[field.name] && (
                      <span className="text-xs text-red-500">
                        This field is required.
                      </span>
                    )}
                  </div>
                );
              })}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-green-500 px-12 text-white py-2 rounded-full hover:bg-cyan-600 mt-4"
                >
                  Sign Up
                </button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </div>

        {/*vendor login */}
        <div className="w-full md:w-2/6 mt-6 md:mt-2 bg-orange-50 rounded-md border flex flex-col items-center p-6 gap-6">
          <h2 className="text-2xl font-bold border-b-4 text-pink-600 border-blue-400 px-2">
            Business Signin
          </h2>
          <form onSubmit={handleVendorLogin}>
            <div className="w-full">
              <label htmlFor="loginEmail" className="text-sm font-bold flex">
                Email <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="p-2 border focus:ring-indigo-500 outline-none focus:border-blue-500 w-full shadow-md sm:text-sm rounded-md"
                required
              />
            </div>
            <div className="w-full mt-4">
              <label htmlFor="loginPassword" className="text-sm font-bold flex">
                Password <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                className="p-2 mb-1 border focus:ring-indigo-500 outline-none focus:border-blue-500 w-full shadow-md sm:text-sm rounded-md"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 px-12 text-white py-2 rounded-full hover:bg-cyan-600 mt-4"
              >
                Login
              </button>
            </div>
          </form>
          <button className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer">
            Forgot Password ?
          </button>
        </div>
      </div>

      {isModalOpen && <LoginOtp email={formData.email} type="vendor" />}
    </div>
  );
};

export default VendorRegistrationForm;
