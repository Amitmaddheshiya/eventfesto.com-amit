"use client";

import Template from "../../../components/template";
import VenueDynamicPage from "../../../components/venues/venuedynamicpage";

// Correct the parameter name to 'param'
function Index({ params }: Readonly<{ params: any }>) {
  return (
    <div>
      <Template>
        <VenueDynamicPage params={params} />
      </Template>
    </div>
  );
}

export default Index;
