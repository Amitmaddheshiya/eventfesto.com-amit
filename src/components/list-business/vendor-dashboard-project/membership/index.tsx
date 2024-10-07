// pages/index.tsx
import type { NextPage } from "next";
import { useEffect, useState } from "react";

interface Package {
  id: number;
  name: string;
  status: string;
  buttonText: string;
  buttonClass: string;
  description: string[];
}

const Home: NextPage = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    // Mock data instead of fetching from an API
    const somePackages: Package[] = [
      {
        id: 1,
        name: "Most Popular",
        status: "Requested",
        buttonText: "Requested",
        buttonClass: "bg-green-600 text-white",
        description: [
          "Visible below Handpicked section",
          "Visible on first page",
          "Dedicated profile management support",
          "Unlimited photo uploads",
          "Call support",
          "Can reply to reviews",
          "Two reviews can be chosen to be pinned to top",
          "Analytics access",
          "Request for Profile mgt",
          "Visible contact details of customers who call you",
          "Can be listed in multiple cities (Additional Charges apply)",
          "Lead Updates Via SMS",
        ],
      },
      {
        id: 2,
        name: "Handpicked",
        status: "Request",
        buttonText: "Request",
        buttonClass: "bg-cyan-700 text-white",
        description: [
          "Top Most Visibility - Membership on invite only",
          "Visible on first page",
          "Dedicated profile management support",
          ",Unlimited photo uploads",
          "Call support",
          "Can reply to reviews",
          "Two reviews can be chosen to be pinned to top",
          "Analytics access",
          "Request for Profile mgt",
          "Visible contact details of customers who call you",
          "Can be listed in multiple cities (Additional Charges apply)",
          "Lead Updates Via SMS",
        ],
      },
    ];

    // Set the state with mock data
    setPackages(somePackages);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md w-full">
        <div className="bg-gray-50 py-4 px-6 text-xl">
          <h2 className="text-2xl font-bold">Membership Packages</h2>
          <p className="text-sm">
            (To know more about how to increase your visibility on our platform,
            reach us on{" "}
            <a
              href="mailto:vendors@wedmegood.com"
              className="text-blue-500 hover:underline ml-1"
            >
              vendors@wedmegood.com
            </a>{" "}
            or 0124-6812346)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id} // Use id as the key
              className="overflow-hidden shadow-md"
            >
              <div
                className={`text-center p-4 ${
                  pkg.status === "Requested" ? "bg-green-100" : "bg-cyan-300"
                }`}
              >
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm mb-4">On Request</p>
                <button className={`py-2 px-4 rounded ${pkg.buttonClass}`}>
                  {pkg.buttonText}
                </button>
              </div>
              <div>
                {pkg.description.map((desc, index) => (
                  <div key={`${pkg.id}-${index}`}>
                    <hr />
                    <p className="text-sm p-10 text-center">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
