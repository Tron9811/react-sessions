import React from "react";
import CarDisplay from "./CarDisplay/CarDisplay";
import CarDataInfo from "../../assets/data/CarData";

const Home = (): JSX.Element => {
	return (
		<>
			<CarDisplay CarData={CarDataInfo} />
		</>
	);
};

export default Home;
