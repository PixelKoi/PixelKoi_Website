import React from "react";
import CaseStudyLayout from "./component/CaseStudyLayout";
import Nav from "../../components/Nav/Nav";
import shopify from "../../assets/CaseStudy/shopify.png";

const CaseStudy = () => {
	return (
		<div>
			<Nav />
			<CaseStudyLayout img={shopify} />
		</div>
	);
};

export default CaseStudy;
