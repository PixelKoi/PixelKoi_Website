import React from "react";
import CaseStudyHeader from "./component/CaseStudyHeader";
import Nav from "../../components/Nav/Nav";
import shopify from "../../assets/CaseStudy/shopify.png";
import hon from "../../assets/CaseStudy/HypeOverNight.png";

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
				overviewIMG={shopify}
				challenge={
					"As Hype Over Night did not have any prior experience in building an e-commerce website, they faced a unique challenge in establishing an online presence. They were looking for a solution that was easy to use and offered a range of features to showcase their products and attract customers. They also wanted a custom design that reflected their style and personality, and a seamless checkout process to ensure a positive customer experience."
				}
				solution={
					<React.Fragment>
						We worked closely with Hype Overnight to understand their brand and
						target audience, and created a custom design that reflected their
						style and personality. We built their first website on Shopify, a
						platform that offered a range of tools and features to help them
						showcase their products and attract customers. We also helped them
						set up their products and collections, and integrated payment and
						shipping solutions to ensure a seamless customer experience.
						<br />
						<br />
						The end result was a stunning website that exceeded their
						expectations and helped them establish a strong online presence.
						They were able to showcase their products and attract new customers,
						resulting in a significant increase in sales. Building their first
						website on Shopify was a smooth and successful experience for Hype
						Overnight, and we were glad to be a part of their journey towards
						e-commerce success.
					</React.Fragment>
				}
				outroIMG={hon}
			/>
		</div>
	);
};

export default CaseStudy;
