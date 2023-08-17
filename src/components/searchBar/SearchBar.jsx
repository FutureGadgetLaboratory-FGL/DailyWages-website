import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className="search-section">
			<div className="right-search">
				<input type="text" name="search" id="main-search-bar" placeholder="Search..."/>

				<button>
					<img src="./images/search.svg" alt="search-icn" />
				</button>
			</div>
			<button>
				<img src="./images/location.svg" alt="location-icon" />
				<span>Location</span>
				
			</button>
		</div>
	);
};

export default SearchBar;
