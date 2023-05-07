import React from "react";
import styles from "./CaseStudyLayout.module.scss";

const CaseStudyLayout = (props: any) => {
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<img src={props.img} alt="" className={styles.headerIMG} />
				<div className={styles.headerDescriptionContainer}>
					<div className={styles.innerHeaderDescriptionContainer}>
						<div className={styles.divideColumns}>
							<h6>Client</h6>
							<h1>{props.title}</h1>
						</div>
						<div className={styles.divideColumns}>
							<h6>Category</h6>
						</div>
						<div className={styles.divideColumns}>
							<h6>Release</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyLayout;
