import React, { useState } from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<div className={styles.container}>
				<img src="./images/Wages.png" alt="logo" id={styles.logo} />
				<ul className={`${styles.menu} ${menuOpen ? styles.showitem : ""}`}>
					<li>HOME</li>
					<li>PROVIDE A SERVICE</li>
					<li>WORKS & SERVICES</li>
				</ul>
				<div className={styles.account}>
					<a href="/">MY ACCOUNT</a>
				</div>
				<img
					src="./images/menu.png"
					onClick={() => {
						setMenuOpen(!menuOpen);
						console.log("hi");
					}}
					alt="toggle menu"
					className={styles.toggleMenu}
				/>
				<img src="./images/account.png" alt="toggle menu" className={styles.accountIcon} />
			</div>
		</nav>
	);
};

export default Navbar;
