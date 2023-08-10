import HeroText from '../heroText/HeroText';
import HeroText from '../searchBar/SearchBar';
import PopularServices from '../popularService/PopularService';


const Hero = ()=>{
    return(
        <>
            <HeroText />
            <SearchBar />
            <PopularServices />
        </>

    )
}

export default Hero;