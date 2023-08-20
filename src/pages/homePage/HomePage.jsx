import NavBar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<>
			<NavBar />
			<div className= {styles.home}>
				<Hero />
			</div>
			
		</>
	);
};

export default HomePage;
