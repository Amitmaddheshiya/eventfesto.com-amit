// pages/reset-password.tsx
"use client";

// pages/reset-password-token.tsx
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPasswordTokenPage = ({ params }: Readonly<{ params: any }>) => {
  const { token } = params;
  const router = useRouter();
  const baseUrl = process.env.API_BASE_URL;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (password === confirmPassword) {
        const response = await axios.post(`${baseUrl}auth/reset-password`, {
          token: token,
          password: password,
          type: "user",
        });

        toast.success(`🦄 ! ${response?.data.message}`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setLoading(false);
        if (response.status === 200) {
          const timeoutId = setTimeout(() => {
            router.push("/");
          }, 4000);

          return () => clearTimeout(timeoutId);
        }
      } else {
        setError("password is not matching.");
      }
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      setError(String(error));
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {loading && (
        <div className="fixed top-0 left-0 w-full">
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </div>
      )}
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
        </div>
        <form className="mt-8" onSubmit={handleResetPassword}>
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="New Password"
          />
          <label htmlFor="password" className="block text-gray-700 mt-6">
            ConfirmPassword
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group mt-8 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordTokenPage;
