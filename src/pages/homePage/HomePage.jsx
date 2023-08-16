import NavBar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";

const HomePage = () => {
	return (
		<>
			<NavBar />
			<div className="home">
				<Hero />
			</div>
			
		</>
	);
};

export default HomePage;
