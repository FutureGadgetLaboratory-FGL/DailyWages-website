import NavBar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import styles from "./HomePage.module.css";
import Footer from "./../../components/footer/Footer";

const HomePage = () => {
	return (
		<>
			<NavBar />
			<div className={styles.home}></div>
			<Hero />
			<Footer />
		</>
	);
};

export default HomePage;
