import styles from "./Footer.module.css";
const Footer = () => {
	return (
		<footer>
			<div className={styles['footer-container']}>
				<h4>Help Center</h4>
				<h4>About Us</h4>
				<h4>Contact Us</h4>
				<h4>Privacy Policy</h4>
				<h4>Disclaimer</h4>
				<h4>Services</h4>
				<h4>Terms Of Use</h4>
			</div>
		</footer>
	);
};

export default Footer;
