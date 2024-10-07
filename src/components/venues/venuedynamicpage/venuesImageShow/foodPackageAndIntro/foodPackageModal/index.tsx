import FoodPackage from "./foodPackage";
import Policies from "./policies";
import VenueSpecification from "./venuespecification";

interface ModalProps {
  onClose: () => void;
  contentType: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, contentType }) => {
  let modalContent;

  switch (contentType) {
    case "Food Packages":
      modalContent = <FoodPackage onClose={onClose} />;
      break;
    case "Venue Specification":
      modalContent = <VenueSpecification onClose={onClose} />;
      break;
    case "Policies":
      modalContent = <Policies onClose={onClose} />;
      break;
    default:
      modalContent = null;
  }

  return (
    <button
      onClick={onClose}
      className=" fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white w-5/6 h-fit rounded-md p-2">{modalContent}</div>
    </button>
  );
};

export default Modal;
