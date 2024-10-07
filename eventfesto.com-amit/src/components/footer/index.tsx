import FooterEventCategories from "./footer-event-categories";
import FooterTerms from "./footer-terms";
import FooterWebsitesContact from "./footer-websites-contact";

const Index = () => {
  const design = (
    <div>
      <FooterWebsitesContact />
      <FooterEventCategories />
      <FooterTerms />
    </div>
  );
  return design;
};

export default Index;
