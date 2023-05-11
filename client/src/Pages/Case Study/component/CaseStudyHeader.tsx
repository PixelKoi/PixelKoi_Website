import styles from "./CaseStudyHeader.module.scss";
import ReactPlayer from "react-player";
import hon from "../../../assets/CaseStudy/hon_press.mp4";

interface CaseStudyHeaderProps {
	catArray: string[];
	img: string;
	client: string;
	releaseDate: string;
	caseStudy: string;
	overview: string;
	overviewIMG: string;
	challenge: string;
	solution: string;
}

const CaseStudyHeader = (props: CaseStudyHeaderProps) => {
	const categoryArray = props.catArray;
	const returnCategories = () => {
		return categoryArray.map((item) => {
			return (
				<div className={styles.catBorder} key={item}>
					<p style={{ color: "#fff" }}>{item}</p>
				</div>
			);
		});
	};
	return (
		<div className={styles.container}>
			{/* {Header} */}
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
							<div className={styles.catGroup}>{returnCategories()}</div>
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

				{/* {Overview} */}
				<div className={styles.overviewContainer}>
					<div className={styles.innerOverview}>
						<h2>Overview</h2>
						<p>{props.overview}</p>
					</div>
				</div>

				<div className={styles.videoContainer}>
					<div className={styles.videoWrapper}>
						<ReactPlayer url={hon} controls height="100%" width="100%" />
					</div>
				</div>

				{/* {Challenge} */}
				<div className={styles.challengeContainer}>
					<div className={styles.innerChallenge}>
						<h2>Challenge</h2>
						<p>{props.challenge}</p>
					</div>
					<div></div>
				</div>

				{/* {Solution} */}
				<div className={styles.overviewContainer}>
					<div className={styles.innerOverview}>
						<h2>Solution</h2>
						<p>{props.solution}</p>
					</div>
					<div className={styles.overviewIMGContainer}>
						<img
							src={props.overviewIMG}
							alt=""
							className={styles.overviewIMG}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyHeader;
