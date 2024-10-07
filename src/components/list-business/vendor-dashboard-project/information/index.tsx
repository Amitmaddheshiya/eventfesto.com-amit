import AdditionalDetails from "./additionalDetails";
import ProfileAnalytics from "./profileAnalytics";
interface AdditionalDetailsProps {
  profileData: {};
}

const Index: React.FC<AdditionalDetailsProps> = ({ profileData }) => {
  return (
    <div>
      <ProfileAnalytics />
      <AdditionalDetails profileData={profileData} />
    </div>
  );
};
export default Index;
