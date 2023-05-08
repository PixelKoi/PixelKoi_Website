import CaseStudyHeader from "./component/CaseStudyHeader";
import CaseStudy from "./CaseStudy.module.scss";
import shopify from "../../assets/CaseStudy/shopify.png";

const Shopify = () => {
	const categories = ["liquid", "shopify"];

	return (
		<div>
			<CaseStudyHeader
				img={shopify}
				client={"Hype Over Night"}
				catArray={categories}
				releaseDate={"March 2023"}
			/>
		</div>
	);
};

export default Shopify;
