import React, { useState } from "react";
import { TbSquareRoundedPlusFilled, TbTrash } from "react-icons/tb";
import AdditionalDetails from "../additionalDetails";
import LocationModal from "./locationModal"; // Adjust the path as necessary

interface FormData {
  [key: string]: string;
}

interface PhoneNumber {
  id: number;
  number: string;
}

interface LocationData {
  storeName: string;
  landmark: string;
  pincode: string;
  address: string;
  markerPosition: {
    lat: number;
    lng: number;
  };
}

const Index = () => {
  const analyticsData = [
    { label: "Leads", value: 0 },
    { label: "Love count", value: 0 },
    { label: "Page views", value: 0 },
  ];

  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>([
    { id: 1, number: "+91 " },
  ]);
  const [nextId, setNextId] = useState<number>(2);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    loginEmail: "ajay.com",
    brandName: "",
    contactPersonName: "",
    additionalEmail: "",
    phoneNumber1: "+9185746533456 ",
    websiteLink: "",
    facebookUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
    additionalInformation: "additional info",
    city: "gkp",
    category: "photography",
  });

  const handlePhoneNumberChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPhoneNumbers = phoneNumbers.map((phone) =>
      phone.id === id ? { ...phone, number: e.target.value } : phone
    );
    setPhoneNumbers(newPhoneNumbers);
    setFormData({ ...formData, [`phoneNumber${id}`]: e.target.value });
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { id: nextId, number: "+91 " }]);
    setNextId(nextId + 1);
  };

  const deletePhoneNumber = (id: number) => {
    const newPhoneNumbers = phoneNumbers.filter((phone) => phone.id !== id);
    setPhoneNumbers(newPhoneNumbers);
    const newFormData = { ...formData };
    delete newFormData[`phoneNumber${id}`];
    setFormData(newFormData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Success:", formData);
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="bg-gray-50 py-4 px-6 text-xl font-bold">
        Profile Analytics
      </div>
      <div className="flex flex-col md:flex-row gap-4  m-5 mx-7">
        {analyticsData.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col p-5 w-full md:w-72 border border-gray-300 md:border-r justify-center items-center"
          >
            <h1>{value}</h1>
            <h2>{label}</h2>
          </div>
        ))}
      </div>
      <div className="border text-center border-cyan-700 p-3 mx-7">
        <p className="text-sm">10% Complete</p>
      </div>
      <div className="mx-7 border my-5 p-3 font-serif">
        <h1>Complete your profile by:</h1>

        <ul className="list-disc ml-4 md:ml-10 p-3 text-sm">
          <li className="mb-1">Answering your FAQs</li>
          <li className="mb-1">
            Linking your profile to your Facebook page/ website
          </li>
          <li className="mb-1">Adding images to your portfolio</li>
          <li className="mb-1">
            Get featured in a Real Wedding. Email your work to eventFesto.com
          </li>
          <li className="mb-1">
            Upload your first album to get visibility on our inspiration gallery
            and social media handles
          </li>
          <li className="mb-1">Invite clients to review your work</li>
        </ul>
      </div>
      <div className="bg-gray-50 py-4 px-6 text-xl">Personal Information</div>

      <form onSubmit={handleModalSubmit}>
        <div className="px-6 py-6 border">
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="loginEmail"
              className="text-gray-700 text-sm w-full md:w-80 mb-1 md:mb-0 font-bold"
            >
              Login email ID
            </label>
            <input
              type="email"
              placeholder="@gmail.com"
              readOnly
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="loginEmail"
              value={formData.loginEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="brandName"
              className="text-gray-700 text-sm w-full mb-1 md:mb-0 font-bold"
            >
              Brand Name<span>*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="brandName"
              value={formData.brandName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="text"
              placeholder="photography"
              readOnly
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="contactPersonName"
              className="text-gray-700 text-sm w-full mb-1 md:mb-0 font-bold"
            >
              Contact person name
            </label>
            <input
              type="text"
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="contactPersonName"
              value={formData.contactPersonName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="additionalEmail"
              className="text-gray-700 text-sm w-full mb-1 md:mb-0 font-bold"
            >
              Additional email ID
            </label>
            <input
              type="text"
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="additionalEmail"
              value={formData.additionalEmail}
              onChange={handleInputChange}
            />
          </div>

          <div className="relative flex flex-col md:flex-row gap-10 mt-4">
            <label
              htmlFor={`phoneNumber1`}
              className="text-gray-700 text-sm md:ml-0 mb-1 md:mb-0 font-bold"
            >
              Contact number
            </label>
            <input
              id={`phoneNumber1`}
              type="tel"
              className="border-b border-gray-300 outline-none w-full md:w-3/5 md:-mt-0 -mt-8 mb-4 p-1 pl-2"
              value={phoneNumbers[0].number}
              onChange={(e) => handlePhoneNumberChange(phoneNumbers[0].id, e)}
              placeholder="Enter phone number"
            />
            <button
              className="absolute -right-4 top-1/2 transform -translate-y-1/2"
              onClick={addPhoneNumber}
            >
              <TbSquareRoundedPlusFilled size={25} />
            </button>
          </div>
          {phoneNumbers.slice(1).map((phone) => (
            <div
              key={phone.id}
              className="relative flex flex-col md:flex-row gap-10 mt-4 items-center"
            >
              <label
                htmlFor={`phoneNumber${phone.id}`}
                className="text-gray-700 text-sm mb-1 md:mb-0 font-bold"
              >
                Contact number
              </label>
              <input
                id={`phoneNumber${phone.id}`}
                type="tel"
                className="border-b border-gray-300 outline-none w-64 md:-mt-0 mb-6 -mt-8 p-1 pl-2"
                value={phone.number}
                onChange={(e) => handlePhoneNumberChange(phone.id, e)}
                placeholder="Enter phone number"
              />
              <button
                className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                onClick={() => deletePhoneNumber(phone.id)}
              >
                <TbTrash size={20} />
              </button>
            </div>
          ))}
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="websiteLink"
              className="text-gray-700 text-sm w-80 mb-1 md:mb-0 font-bold"
            >
              Website link
            </label>
            <input
              type="text"
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="facebookUrl"
              className="text-gray-700 text-sm w-80 mb-1 md:mb-0 font-bold"
            >
              Facebook url
            </label>
            <input
              type="text"
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="facebookUrl"
              value={formData.facebookUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="instagramUrl"
              className="text-gray-700 text-sm w-80 mb-1 md:mb-0 font-bold"
            >
              Instagram url
            </label>
            <input
              type="text"
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="instagramUrl"
              value={formData.instagramUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="youtubeUrl"
              className="text-gray-700 text-sm w-80 mb-1 md:mb-0 font-bold"
            >
              Youtube/Vimeo url
            </label>
            <input
              type="text"
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="youtubeUrl"
              value={formData.youtubeUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="additionalInformation"
              className="text-gray-700 text-sm w-80 font-bold"
            >
              Additional Information
              <p className="text-xs mt-1 md:mb-0 mb-2">
                (To update description,please send a mail
                vendors@eventFesto.com)
              </p>
            </label>
            <input
              type="text"
              readOnly
              className="border border-gray-300 bg-gray-50 h-32 outline-none w-full md:w-3/5 p-1"
              name="additionalInformation"
              value={formData.additionalInformation}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label
              htmlFor="city"
              className="text-gray-700 text-sm w-80 mb-1 md:mb-0 font-bold"
            >
              City*(Choose your base city here)
            </label>
            <input
              type="text"
              placeholder="city"
              readOnly
              className="border border-gray-300 outline-none w-full md:w-3/5 p-1"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex mt-8 mb-12">
            <p className="text-gray-700 text-sm w-80 font-bold">Address</p>
            <button
              type="button"
              className="flex items-center gap-2 text-gray-700 text-sm font-bold"
              onClick={() => setIsModalOpen(true)}
            >
              <TbSquareRoundedPlusFilled />
              <p>Add a location</p>
            </button>
          </div>
          {locationData && (
            <div className="grid grid-cols-2 mt-2 mb-2 gap-2">
              {Object.entries(locationData).map(([key, value]) => (
                <div className="flex flex-col mb-4" key={key}>
                  <label
                    htmlFor={key}
                    className="text-gray-700 text-sm font-bold mb-1"
                  >
                    {key}
                  </label>
                  <input
                    id={key}
                    type="text"
                    className="border border-gray-300 outline-none p-1"
                    value={
                      typeof value === "string"
                        ? value
                        : `${value.lat}, ${value.lng}`
                    }
                    readOnly
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </form>

      <AdditionalDetails profileData={formData} />

      <LocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data: LocationData) => {
          setLocationData(data);
          setFormData((prevFormData) => ({
            ...prevFormData,
            storeName: data.storeName,
            landmark: data.landmark,
            pincode: data.pincode,
            address: data.address,
            markerPosition: `${data.markerPosition.lat}, ${data.markerPosition.lng}`,
          }));
        }}
      />
    </div>
  );
};

export default Index;
