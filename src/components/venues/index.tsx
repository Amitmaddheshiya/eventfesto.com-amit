import Category from "./category";
import VenueFilter from "./venue-filter";
import VenueStatus from "./venue-status";
const Index = () => {
  return (
    <div>
      <VenueStatus />
      <VenueFilter />
      <Category />
    </div>
  );
};
export default Index;
