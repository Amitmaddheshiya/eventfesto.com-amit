"use client";
import HistoricalMessage from "./historical-message";
import HomeVenueStatus from "./home-venue-status";
import ImageCmp from "./image-cmp";
import WeddingCategories from "./wedding-categories";
const Home: React.FC = () => {
  return (
    <div>
      <ImageCmp />
      <HomeVenueStatus />
      <HistoricalMessage />
      <WeddingCategories />
    </div>
  );
};

export default Home;
