import { Language } from "../interfaces/language.interface";
import { SupportedLanguages } from "../types/language.type";
import en from "./en";
import hi from "./hi";

const localize = (
  key: string,
  value: string,
  lang: SupportedLanguages = "en"
): string => {
  let language: Language;

  switch (lang.toLowerCase()) {
    case "hi":
      language = hi;
      break;

    default:
      language = en;
  }

  return language[key][value];
};

export default localize;
