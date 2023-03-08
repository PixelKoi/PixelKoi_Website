import styles from "./EmployeeCard.module.css";

const EmployeeCard = (props: any) => {
	const { name, title, img } = props;

	return (
		<div className={styles.container}>
			<img src={img} alt="" className={styles.placeholder} />
			<div className={styles.content}>
				<h4>{name}</h4>
				<p>{title}</p>
			</div>
		</div>
	);
};

export default EmployeeCard;
