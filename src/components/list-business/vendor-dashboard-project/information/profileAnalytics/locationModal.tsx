"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";
const mapContainerStyle = {
  height: "300px", // Increased height for the map
  width: "100%",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    storeName: string;
    landmark: string;
    pincode: string;
    address: string;
    markerPosition: { lat: number; lng: number };
  }) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [storeName, setStoreName] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [markerPosition, setMarkerPosition] = useState(center);

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  }, []);

  const handleSubmit = () => {
    onSubmit({ storeName, landmark, pincode, address, markerPosition });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Add Location</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl">
            &times;
          </button>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="storeName" className="block mb-2">
              Store Name
            </label>
            <input
              id="storeName"
              type="text"
              placeholder="Store Name"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="border border-gray-300 text-sm focus:outline-none w-full p-2 mb-1"
            />
            <label htmlFor="landmark" className="block mb-2">
              Landmark*
            </label>
            <input
              id="landmark"
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="border border-gray-300 focus:outline-none w-full p-2 mb-1 h-20"
            />
            <label htmlFor="pincode" className="block mb-2">
              Pincode*
            </label>
            <input
              id="pincode"
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border border-gray-300 focus:outline-none text-sm w-full p-2 mb-1"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="address" className="block text-sm mb-2">
              Add location on map. It helps customers to find you easily.
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type an Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 focus:outline-none w-full text-sm p-2 mb-4"
            />
            <div className="mb-4">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={5}
                  center={center}
                  onClick={onMapClick}
                  options={{ zoomControl: true }} // Enable zoom controls
                >
                  <Marker position={markerPosition} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-pink-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
