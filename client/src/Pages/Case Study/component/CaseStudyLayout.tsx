import styles from "./CaseStudyLayout.module.scss";

const CaseStudyLayout = (props: any) => {
	const catArray = props.catArray;
	const returnCat = () => {
		return catArray.map((item) => {
			return <h6>{item}</h6>;
		});
	};
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<img src={props.img} alt="" className={styles.headerIMG} />
				<div className={styles.headerDescriptionContainer}>
					<div className={styles.innerHeaderDescriptionContainer}>
						<div className={styles.divideColumns}>
							<h6>Client</h6>
							<h6>{props.client}</h6>
						</div>
						<div className={styles.divideColumns}>
							<h6>Category</h6>
							<div className={styles.catGroup}>{returnCat()}</div>
						</div>
						<div className={styles.divideColumns}>
							<h6>Release</h6>
							{props.releaseDate}
						</div>
					</div>
				</div>

				<div className={styles.caseTitleContainer}>
					<h6>CASE STUDY</h6>
					<h1>HYPE OVER NIGHT</h1>
					<hr className={styles.line} />
				</div>
			</div>
		</div>
	);
};

export default CaseStudyLayout;
