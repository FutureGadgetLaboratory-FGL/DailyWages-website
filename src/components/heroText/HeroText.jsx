import styles from "./HeroText.module.css";
const HeroText = () => {
	return (
		<div className={styles['hero-container']}>
			<h1>DAILY WAGES</h1>
			<h3>Directly connect to your local workers.</h3>
		</div>
	);
};

export default HeroText;
