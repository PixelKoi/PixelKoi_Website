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
					"Hype Over Night is a hype beast clothing company that came to us looking for the best solution for their online store. They wanted a platform that would allow them to showcase their products in the best possible way, while also providing a seamless user experience for their customers. After evaluating several options, we recommended Shopify as the best solution for their needs."
				}
			/>
		</div>
	);
};

export default Shopify;

/*
Challenge:

The main challenge for Hype Over Night was to create an online store that would match the quality and aesthetic of their brand. They wanted a platform that would allow them to easily upload new products, manage their inventory, and process orders in a streamlined manner. They also wanted to offer a range of payment options and shipping methods to their customers, while ensuring that the checkout process was secure and reliable.

Solution:

After careful consideration, we recommended Shopify as the ideal solution for Hype Over Night. Shopify is a powerful e-commerce platform that is designed to help businesses create and manage online stores. It is easy to use, customizable, and provides a range of features that are perfect for businesses of all sizes.

To create the Hype Over Night online store, we used Shopify's built-in templates to create a visually appealing and user-friendly website. We also customized the design to match the brand's aesthetic, using their existing logos, colors, and imagery. We added features like a product carousel, product filters, and a quick view option to help customers easily browse and find the products they were looking for.

We also integrated a range of payment and shipping options into the checkout process, including credit cards, PayPal, and various shipping methods. To ensure the security of customer data, we installed SSL certificates and implemented other security measures.

Results:

Since launching the new online store, Hype Over Night has seen a significant increase in website traffic and sales. The website is easy to use and visually appealing, which has helped to engage customers and encourage them to make purchases. The Shopify platform has also made it easy for Hype Over Night to manage their inventory, process orders, and track sales data. Overall, the new online store has been a great success for Hype Over Night, and has helped to establish them as a leader in the streetwear industry.


*/
