import styles from "./CaseStudyLayout.module.scss";

const CaseStudyHeader = (props: any) => {
	const catArray = props.catArray;
	const returnCat = () => {
		return catArray.map((item) => {
			return (
				<div className={styles.catBorder}>
					<p>{item}</p>
				</div>
			);
		});
	};
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<img src={props.img} alt="" className={styles.headerIMG} />
				<div className={styles.headerDescriptionContainer}>
					<div className={styles.innerHeaderDescriptionContainer}>
						<div className={styles.divideColumns}>
							<div className={styles.colTitle}>
								<p>Client</p>
							</div>
							<h5>{props.client}</h5>
						</div>
						<div className={styles.divideColumns}>
							<div className={styles.colTitle}>
								<p>Category</p>
							</div>
							<div className={styles.catGroup}>{returnCat()}</div>
						</div>
						<div className={styles.divideColumns}>
							<div className={styles.colTitle}>
								<p>Release</p>
							</div>
							<h5>{props.releaseDate}</h5>
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

export default CaseStudyHeader;
