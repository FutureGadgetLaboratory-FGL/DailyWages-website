import React from "react";

import "./Navbar.css";

const Navbar = () => {
	const toggleMenuHandler = () => {
		const menu = document.querySelector(".menu");
		const classes = Object.values(menu.classList);
		if (classes.includes("showitem")) {
			menu.classList.remove("showitem");
		} else {
			menu.classList.add("showitem");
		}
	};

	return (
		<nav>
			<div className="container">
				<img src="./images/Wages.png" alt="logo" id="logo" />
				<ul className="menu">
					<li><a href="/" >HOME</a></li>
					<li>PROVIDE A SERVICE</li>
					<li>WORKS & SERVICES</li>
				</ul>
				<div className="account">
					<a href="/auth">MY ACCOUNT</a>
				</div>
				<img src="./images/menu.png" onClick={toggleMenuHandler} alt="toggle menu" className="toggleMenu" />
				<img src="./images/account.png" alt="toggle menu" className="accountIcon" />
			</div>
		</nav>
	);
};

export default Navbar;
