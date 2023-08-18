import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
	const {menu: menuClass, showitem} = styles;
	const toggleMenuHandler = () => {
		const menu = document.querySelector(`.${menuClass}`);
		const classes = Object.values(menu.classList);
		if (classes.includes(showitem)) {
			menu.classList.remove(showitem);
		} else {
			menu.classList.add(showitem);
		}
	};

	return (
		<nav>
			<div className={styles.container}>
				<img src="./images/Wages.png" alt="logo" id={styles.logo} />
				<ul className={styles.menu}>
					<li>HOME</li>
					<li>PROVIDE A SERVICE</li>
					<li>WORKS & SERVICES</li>
				</ul>
				<div className={styles.account}>
					<a href="/">MY ACCOUNT</a>
				</div>
				<img src="./images/menu.png" onClick={toggleMenuHandler} alt="toggle menu" className={styles.toggleMenu} />
				<img src="./images/account.png" alt="toggle menu" className={styles.accountIcon} />
			</div>
		</nav>
	);
};

export default Navbar;
