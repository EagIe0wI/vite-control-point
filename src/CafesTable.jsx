import { useEffect, useState } from "react";
import axios from "axios";
import FilterCafes from "./FilterCafes";

const CafesTable = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const requestData = async () => {
			const newData = await axios.get("/cafes");
			setData(newData.data.cafes);
		};

		requestData();
	}, []);

	const cards = data.map((item) => (
		<li className="card">
			<img
				src={
					item.img ||
					"https://www.meme-arsenal.com/memes/8176828a4c11da89c258931819d3be3d.jpg"
				}
				alt="image"
			/>
			<h2>{item.name}</h2>
			<p>{item.decs}</p>
			<p>{item.address}</p>
			<p>{item.subwayCode}</p>
			<p>{item.workTime}</p>
		</li>
	));

	return (
		<div class="cafesTable">
			<FilterCafes></FilterCafes>
			<ul class="cardsList">{cards}</ul>
		</div>
	);
};

export default CafesTable;
