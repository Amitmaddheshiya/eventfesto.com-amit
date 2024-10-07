"use client";
import { ChangeEvent, useState } from "react";
import {
  AdditionalData,
  alcoholPolicy,
  cancellationPolicies,
  catPolicy,
  decorPolicy,
  filter,
  packages,
  services,
  venueTypes,
  venues,
} from "../data";

interface AdditionalDetailsProps {
  profileData: {};
}

const Index: React.FC<AdditionalDetailsProps> = ({ profileData }) => {
  const [additionalData, setAdditionalData] = useState<AdditionalData>({
    smallGatherings: "",
    parking: "",
    bookingAmount: "",
    usp: "",
    bookingAdvanceWeeks: "",
    userCancellationPolicy: "",
    cancellationPolicyDetails: "",
    rentalCost: "",
    venueType: "",
    selectedVenues: [],
    vegMenuPrice: "",
    nonVegMenuPrice: "",
    filterVenue: "",
    roomsAvailable: "",
    basicRoomPrice: "",
    cat: "",
    decor: "",
    alcohol: "",
    decorPrice: "",
    djPolicy: "",
    selectedServices: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setAdditionalData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked ? value : "",
      }));
    } else {
      setAdditionalData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleVenuesChange =
    (venuesValue: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;

      if (checked) {
        // Add venue value to selectedVenues array
        setAdditionalData((prevData) => ({
          ...prevData,
          selectedVenues: [...prevData.selectedVenues, venuesValue],
        }));
      } else {
        // Remove venue value from selectedVenues array
        setAdditionalData((prevData) => ({
          ...prevData,
          selectedVenues: prevData.selectedVenues.filter(
            (s) => s !== venuesValue
          ),
        }));
      }
    };

  const handleServiceChange =
    (serviceValue: string, label: string) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;

      if (checked) {
        // Add service value to selectedServices array
        setAdditionalData((prevData) => ({
          ...prevData,
          selectedServices: [...prevData.selectedServices, label],
        }));
      } else {
        // Remove service value from selectedServices array
        setAdditionalData((prevData) => ({
          ...prevData,
          selectedServices: prevData.selectedServices.filter(
            (s) => s !== label
          ),
        }));
      }
    };

  const handleAddionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ profileData, additionalData });
  };

  return (
    <div className="bg-white border-t shadow-sm py-6">
      <div className="bg-gray-50 py-4 px-6 text-xl">Additional Details</div>
      <div className="px-6">
        <p className="py-4 font-bold text-gray-700 text-sm">
          Do you also allow small size gatherings (50)?
        </p>
        <form onSubmit={handleAddionSubmit}>
          <label className="block text-xs md:text-sm mb-2 md:mb-3">
            <input
              type="radio"
              name="smallGatherings"
              value={additionalData.smallGatherings}
              className="mr-2 md:w-4 md:h-4"
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <label className="block text-xs md:text-sm mb-2 md:mb-3">
            <input
              type="radio"
              name="smallGatherings"
              value={additionalData.smallGatherings}
              className="mr-2 md:w-4 md:h-4"
              onChange={handleChange}
            />{" "}
            No
          </label>
          <hr />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Is parking available at the venue?
          </p>
          {packages.map((packageOption) => (
            <label
              key={packageOption.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="radio"
                name="parking"
                value={packageOption.label}
                checked={additionalData.parking === packageOption.label}
                onChange={handleChange}
                className="mr-2 md:w-4 md:h-4"
              />{" "}
              {packageOption.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            What is the booking amount (in percentage terms you take) to block a
            date?
          </p>
          <input
            type="text"
            name="bookingAmount"
            value={additionalData.bookingAmount}
            onChange={handleChange}
            className="border outline-none md:mb-3 p-1"
          />
          <p className="py-4 font-bold text-gray-700 text-sm">
            What is your USP?
          </p>
          <textarea
            name="usp"
            value={additionalData.usp}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            How many weeks in advance should a booking be made?
          </p>
          <textarea
            name="bookingAdvanceWeeks"
            value={additionalData.bookingAdvanceWeeks}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-7" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Please describe your cancellation policy (if a user initiates
            cancellation) including whether you provide refunds of booking
            amounts, and terms for doing so.
          </p>
          {cancellationPolicies.map((policy) => (
            <label
              key={policy.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="radio"
                name="userCancellationPolicy"
                value={policy.label}
                checked={additionalData.userCancellationPolicy === policy.label}
                className="mr-2 md:w-4 md:h-4"
                onChange={handleChange}
              />{" "}
              {policy.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            What are the terms & conditions of your cancellation policy? (please
            describe in detail - e.g., No refunds within a month of the wedding
            day or 50% amount refundable if notified 3 months in advance of the
            wedding date).
          </p>
          <textarea
            name="cancellationPolicyDetails"
            value={additionalData.cancellationPolicyDetails}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            What is the rental cost of the venue? (Please provide cost in INR
            terms)
          </p>
          <textarea
            name="rentalCost"
            value={additionalData.rentalCost}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Please specify your venue type
          </p>
          {venueTypes.map((venueType) => (
            <label
              key={venueType.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="radio"
                name="venueType"
                value={venueType.label}
                checked={additionalData.venueType === venueType.label}
                className="mr-2 md:w-4 md:h-4"
                onChange={handleChange}
              />{" "}
              {venueType.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Venue is Wheel chair friendly
          </p>
          {venues.map((venues) => (
            <label
              key={venues.value}
              className="block text-xs md:text-sm mb-2 mb-2 md:mb-3"
            >
              <input
                type="checkbox"
                name="selectedVenues"
                value={venues.label}
                checked={additionalData.selectedVenues.includes(venues.label)}
                className="mr-2 md:w-4 md:h-4"
                onChange={handleVenuesChange(venues.label)}
              />{" "}
              {venues.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Price (cost per plate for veg menu)?
          </p>
          <textarea
            name="vegMenuPrice"
            value={additionalData.vegMenuPrice}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Price (cost per plate for non-veg menu)?
          </p>
          <textarea
            name="nonVegMenuPrice"
            value={additionalData.nonVegMenuPrice}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Please select from the below options:
          </p>
          {filter.map((filterOption) => (
            <label
              key={filterOption.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="radio"
                name="filterVenue"
                value={filterOption.label}
                checked={additionalData.filterVenue === filterOption.label}
                className="mr-2 md:w-4 md:h-4"
                onChange={handleChange}
              />{" "}
              {filterOption.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Are rooms available in the venue for accomodation?
          </p>
          <textarea
            name="roomsAvailable"
            value={additionalData.roomsAvailable}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Basic price per room?
          </p>
          <textarea
            name="basicRoomPrice"
            value={additionalData.basicRoomPrice}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-7" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Catering policy (select from below options)?
          </p>

          {catPolicy.map((catOption) => (
            <label
              key={catOption.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="radio"
                name="cat"
                value={catOption.label}
                checked={additionalData.cat === catOption.label}
                onChange={handleChange}
                className="mr-2 md:w-4 md:h-4"
              />{" "}
              {catOption.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Decor policy (select from below options)?
          </p>

          {decorPolicy.map((decorOption) => (
            <label
              key={decorOption.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="radio"
                name="decor"
                value={decorOption.label}
                checked={additionalData.decor === decorOption.label}
                onChange={handleChange}
                className="mr-2 md:w-4 md:h-4"
              />{" "}
              {decorOption.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Alcohol policy (select from below options)?
          </p>

          {alcoholPolicy.map((alcoholOption) => (
            <label
              key={alcoholOption.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="radio"
                name="alcohol"
                value={alcoholOption.label}
                checked={additionalData.alcohol === alcoholOption.label}
                onChange={handleChange}
                className="mr-2 md:w-4 md:h-4"
              />{" "}
              {alcoholOption.label}
            </label>
          ))}
          <hr className="mt-5" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Price for standard decor package?
          </p>
          <textarea
            name="decorPrice"
            value={additionalData.decorPrice}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-7" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            What is your DJ policy?
          </p>
          <textarea
            name="djPolicy"
            value={additionalData.djPolicy}
            onChange={handleChange}
            placeholder="Enter your message*"
            className="border border-gray-300 outline-none h-28 text-sm w-full p-2"
          />
          <hr className="mt-7" />
          <p className="py-4 font-bold text-gray-700 text-sm">
            Do you provide other services apart from venue rentals (select all
            applicable)?
          </p>
          {services.map((service) => (
            <label
              key={service.value}
              className="block text-xs md:text-sm mb-2 md:mb-3"
            >
              <input
                type="checkbox"
                name="selectedServices"
                value={service.label}
                checked={additionalData.selectedServices.some(
                  (s) => s === service.label
                )}
                className="mr-2 md:w-4 md:h-4"
                onChange={handleServiceChange(service.value, service.label)}
              />{" "}
              {service.label}
            </label>
          ))}
          <hr className="mt-5" />
          <button
            type="submit"
            className="bg-cyan-800 hover:bg-cyan-900 px-20 py-2 mt-8 text-white text-xl"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
