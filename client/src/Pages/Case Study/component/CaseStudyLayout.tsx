import React from "react";
import styles from "./CaseStudyLayout.module.scss";

const CaseStudyLayout = (props: any) => {
	return (
		<div className={styles.container}>
			<img src={props.img} alt="" />
			<div>
				<div>
					<h4>{props.client}</h4>
					<h1>{props.title}</h1>
				</div>
				<div>
					<h4>{props.category}</h4>
				</div>
				<div>
					<h4>{props.release}</h4>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyLayout;
