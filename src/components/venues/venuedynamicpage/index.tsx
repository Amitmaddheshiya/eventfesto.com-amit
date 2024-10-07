import YouMayAlsoLike from "./alsolike";
import Breadcrumb from "./breadcrumb";
import ReviewAndRating from "./review-rating";
import VenueTour from "./venueTour";
import VenuesImageShow from "./venuesImageShow";
function index({ params }: { params: any }) {
  return (
    <div className=" w-full flex justify-center">
      <div className="md:w-5/6 w-full">
        <Breadcrumb params={params} />
        <VenuesImageShow />
        <VenueTour />
        <YouMayAlsoLike />
        <ReviewAndRating />
      </div>
    </div>
  );
}

export default index;
