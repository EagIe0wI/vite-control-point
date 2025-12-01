const FilterCafes = () => {
	const subwayData = [
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

	const options = subwayData.map((item) => <option value={item.code}>{item.name}</option>);

	return (
		<div className="controls">
			<select name="subway" id="subway">
				<option value="All">Все</option>
				{options}
			</select>
		</div>
	);
};

export default FilterCafes;
