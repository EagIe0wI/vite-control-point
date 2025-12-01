import { useState } from "react";

const FilterCafes = () => {
	const [selectedSubway, setSubway] = useState("All");

	const subwayOptions = [
		{
			name: "Все",
			code: "All",
		},
		{
			name: "Арбатская",
			code: "Arbat",
		},
		{
			name: "Александровский сад",
			code: "Alexanders Garden",
		},
		{
			name: "Московская",
			code: "Moscow",
		},
		{
			name: "Парк Культуры",
			code: "Culture",
		},
		{
			name: "Театральная",
			code: "Theater",
		},
	];

	const changeSubway = (e) => {
		setSubway(e.target.value);
		console.log("CHENGED", e.target.value);
	};

	const options = subwayOptions.map((item, id) => (
		<option key={id} value={item.code} onClick={changeSubway}>
			{item.name}
		</option>
	));

	return (
		<div className="controls">
			<select className="subway" id="subway">
				{options}
			</select>
		</div>
	);
};

export default FilterCafes;
