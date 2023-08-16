import "./PopularService.css";
const PopularService = () => {
	return (
		<div className="popular-services-container">
			<h2>Popular Services</h2>
			<div className="services">
				<div className="card">
					<img src="./images/electrician.jpg" alt="electirician" />
					<p>Electrician</p>
				</div>
				<div className="card">
					<img src="./images/painter.jpg" alt="painter" />
					<p>Painter</p>
				</div>
				<div className="card">
					<img src="./images/plumber.jpg" alt="plumber" />
					<p>Plumber</p>
				</div>
				<div className="card">
					<img src="./images/carpenter.jpg" alt="carpenter" />
					<p>Carpenter</p>
				</div>
			</div>
		</div>
	);
};

export default PopularService;
