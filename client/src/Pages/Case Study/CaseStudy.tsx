import React from "react";
import CaseStudyLayout from "./component/CaseStudyLayout";
import Nav from "../../components/Nav/Nav";
import shopify from "../../assets/CaseStudy/shopify.png";

const CaseStudy = () => {
	const categories = ["liquid", "shopify"];
	return (
		<div>
			<Nav />
			<CaseStudyLayout
				img={shopify}
				client={"Hype Over Night"}
				catArray={categories}
				releaseDate={"March 2023"}
			/>
		</div>
	);
};

export default CaseStudy;
