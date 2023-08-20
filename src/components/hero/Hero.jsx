import HeroText from "../heroText/HeroText";
import SearchBar from "../searchBar/SearchBar";
import PopularServices from "../popularService/PopularService";
import Footer from '../footer/Footer';

const Hero = () => {
	return (
		<>
			<HeroText />
			<SearchBar />
			<PopularServices />
			<Footer />
		</>
	);
};

export default Hero;
