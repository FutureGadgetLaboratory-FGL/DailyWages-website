import HeroText from "../heroText/HeroText";
import SearchBar from "../searchBar/SearchBar";
import PopularServices from "../popularService/PopularService";
import styles from "./Hero.module.css";
const Hero = () => {
	return (
		<div className={styles.container}>
			<HeroText />
			<SearchBar />
			<PopularServices />
		</div>

	);
};

export default Hero;
