import React, { useState } from "react";
import { TrafficLight } from "./trafficLight";
//include images into your bundle

//create your first component
const Home = () => {

	return (
		<div className="text-center">
            <div className="container" >
				<TrafficLight/>
			</div>
		</div>
	);
};

export default Home;