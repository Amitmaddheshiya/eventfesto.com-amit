"use client";

import { updateLanguage } from "@/redux/slices/localization.slice";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface LangSelectProps {
  lang: string;
}
const LangSelect: React.FC<LangSelectProps> = (props) => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(props.lang);
  const languageData = [
    { id: 2, value: "hi", name: "हिन्दी - Hindi" },
    { id: 1, value: "en", name: "English" },
  ];
  const handleLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    dispatch(updateLanguage(event.target.value));
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <select
      className="w-32 text-center cursor-pointer bg-white  border border-gray-300 text-gray-700 p-1  rounded  focus:outline-none focus:border-cyan-500"
      value={language} // "value" instead of "defaultValue" to set the selected value
      onChange={handleLanguage}
    >
      {languageData.map((option) => (
        <option value={option.value} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default LangSelect;
