import React from "react";
import CaseStudyHeader from "./component/CaseStudyHeader";
import Nav from "../../components/Nav/Nav";
import shopify from "../../assets/CaseStudy/shopify.png";

const CaseStudy = () => {
	const categories = ["liquid", "shopify"];
	return (
		<div>
			<Nav />
			<CaseStudyHeader
				img={shopify}
				client={"Hype Over Night"}
				catArray={categories}
				releaseDate={"March 2023"}
			/>
		</div>
	);
};

export default CaseStudy;
