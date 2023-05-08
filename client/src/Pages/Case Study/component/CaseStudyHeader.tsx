import styles from "./CaseStudyHeader.module.scss";

interface CaseStudyHeaderProps {
	catArray: string[];
	img: string;
	client: string;
	releaseDate: string;
	caseStudy: string;
	overview: string;
}

const CaseStudyHeader = (props: CaseStudyHeaderProps) => {
	const catArray = props.catArray;
	const returnCat = () => {
		return catArray.map((item) => {
			return (
				<div className={styles.catBorder} key={item}>
					<p style={{ color: "#fff" }}>{item}</p>
				</div>
			);
		});
	};
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<div className={styles.imgWrapper}>
					<img src={props.img} alt="" className={styles.headerIMG} />
				</div>
				<div className={styles.headerDescriptionContainer}>
					<div className={styles.innerHeaderDescriptionContainer}>
						<div className={styles.divideColumns}>
							<div className={styles.colTitle}>
								<p>CLIENT</p>
							</div>
							<h5>{props.client}</h5>
						</div>
						<div className={styles.divideColumns}>
							<div className={styles.colTitle}>
								<p>CATEGORY</p>
							</div>
							<div className={styles.catGroup}>{returnCat()}</div>
						</div>
						<div className={styles.divideColumns}>
							<div className={styles.colTitle}>
								<p>RELEASE</p>
							</div>
							<h5>{props.releaseDate}</h5>
						</div>
					</div>
				</div>

				<div className={styles.caseTitleContainer}>
					<p>CASE STUDY</p>
					<h1>{props.client}</h1>
					<hr className={styles.line} />
				</div>

				<div className={styles.overviewContainer}>
					<div className={styles.innerOverview}>
						<h2>Overview</h2>
						<p>{props.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyHeader;
