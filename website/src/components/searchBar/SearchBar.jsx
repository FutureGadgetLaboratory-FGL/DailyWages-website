import styles from "./SearchBar.module.css";

const SearchBar = () => {
	return (
		<div className={styles["search-section"]}>
			<div className={styles["right-search"]}>
				<input type="text" name="search" id={styles["main-search-bar"]} placeholder="Search..." />

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
