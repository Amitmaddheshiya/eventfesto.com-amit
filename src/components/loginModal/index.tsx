"use client";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginModalProps {
  onClose: () => void;
  isModalOpenSignup: boolean;
}

const Index: React.FC<LoginModalProps> = ({ onClose, isModalOpenSignup }) => {
  const baseUrl = process.env.API_BASE_URL;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      setLogout(true);
    }
  }, [logout]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}auth/login`, {
        email,
        password,
      });

      console.log(response.data.data.accessToken);
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
        router.push("/");
      }, 3000);
      localStorage.setItem("TOKEN", response.data.data.accessToken);
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
    onClose();
  };

  const logOut = () => {
    localStorage.removeItem("TOKEN");
    setLogout(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="w-10/12 bg-white p-4 rounded-md shadow-md md:w-3/12 h-fit border-4 border-cyan-500">
        <div className="flex justify-end  text-gray-400">
          <ImCross className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="flex justify-center ">
          <h3 className="md:text-xl text-md font-semibold mb-4 text-gray-800">
            Log In with
          </h3>
        </div>

        <div className="border border-gray-300 border-l-0 border-r-0 p-2 flex justify-center">
          <div className="flex justify-center rounded-xl hover:bg-slate-500 items-center w-full md:w-5/6 py-2 bg-sky-700 text-white cursor-pointer">
            <FaFacebookF className="text-lg" />
            <p className="md:text-sm text-xs">LOGIN WITH FACEBOOK</p>
          </div>
        </div>
        <p className="text-center float-down z-index-1 font-bold text-xl">or</p>

        <button
          onClick={logOut}
          className={`${logout ? "block" : "hidden"} mt-4 w-full p-2 shadow-md bg-cyan-500 hover:bg-cyan-700 rounded-xl text-white text-md font-bold`}
        >
          Logout
        </button>
        <form
          onSubmit={handleLogin}
          className={`${logout ? "hidden" : "block"}`}
        >
          <div className="mb-2 mt-2">
            <label
              htmlFor="email"
              className="block text-xs md:text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 md:p-2 p-1 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email Id"
            />
          </div>

          <div className="mb-4 mt-2">
            <label
              htmlFor="password"
              className="block text-xs md:text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="mt-1 md:p-2 p-1 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white mt-2 py-2 rounded-md hover:bg-cyan-600 transition-colors"
          >
            Next
          </button>
        </form>
        <div className="flex justify-end md:mt-2 mt-1">
          <Link href="/forgot-password-user">
            <button
              type="submit"
              className="text-sm md:text-lg text-blue-600 hover:text-blue-400 py-1 md:py-2 rounded-md transition-colors "
            >
              Forgot password ?
            </button>
          </Link>
        </div>

        <div className="w-full flex justify-center items-center border-t border-gray-300 p-2 gap-x-4 ">
          <div className="w-full flex flex-col items-center">
            <p className="text-center text-xs">Are you a costomer?</p>
            {isModalOpenSignup ? (
              <button
                onClick={onClose}
                className="flex justify-center items-center py-2 w-24 border-2 rounded-md text-xs hover:bg-red-500 hover:text-white border-red-500 mt-2"
              >
                Close
              </button>
            ) : (
              <p className="flex justify-center items-center py-2 w-24 border-2 rounded-md text-xs hover:bg-blue-500 hover:text-white border-blue-500  mt-2">
                <Link href="/signup">SIGN UP</Link>
              </p>
            )}
          </div>
          <div className="flex flex-col items-center w-full">
            <p className="text-center text-xs">Are you a business?</p>
            <button className="flex justify-center items-center py-2 w-24 border-2 rounded-md text-xs hover:bg-green-500 hover:text-white border-green-500 mt-2">
              <Link href="/list-business">CLICK HERE</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
