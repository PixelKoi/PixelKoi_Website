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
				overview={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor, nunc ut consectetur vestibulum, nulla nisi accumsan ligula, vel feugiat ipsum enim vitae dui. Donec bibendum ornare sapien, ut fringilla libero posuere ut. Nulla nec turpis eget mi pulvinar bibendum. Fusce mattis arcu id mi eleifend aliquet. Nunc non lacus non velit imperdiet euismod. Aliquam auctor metus ac sapien lobortis, vel tempor magna sagittis. Maecenas elementum faucibus tellus, a pulvinar tellus consectetur sit amet. Suspendisse convallis ipsum a felis malesuada, nec viverra odio fermentum. Ut convallis dolor nec dapibus ultrices. Sed malesuada risus quam, at dignissim massa semper eget. Sed dictum mauris vel est blandit, id congue elit blandit. Sed malesuada, mauris vitae convallis commodo, dolor nisi ornare turpis, eu vehicula sapien tellus sit amet justo. Donec eleifend ante ac turpis eleifend, a pharetra odio congue."
				}
			/>
		</div>
	);
};

export default Shopify;
