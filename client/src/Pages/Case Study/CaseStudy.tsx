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
				overview={
					"Hype Over Night is a hype beast clothing company that came to us looking for the best solution for their online store. They wanted a platform that would allow them to showcase their products in the best possible way, while also providing a seamless user experience for their customers. After evaluating several options, we recommended Shopify as the best solution for their needs."
				}
			/>
		</div>
	);
};

export default CaseStudy;
