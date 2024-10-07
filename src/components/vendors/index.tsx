import Business from "./business";
import Catergory from "./catergory";
import Partners from "./partners";
import Services from "./services";

const Index: React.FC = () => {
  return (
    <div>
      {/* Wrap all children with a parent element */}
      <Business />
      <Catergory />
      <Services />
      <Partners />
    </div>
  );
};

export default Index;
