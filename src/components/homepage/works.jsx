import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./talan.jpg"
								alt="talan"
								className="work-image"
							/>
							<div className="work-title">Talan UK</div>
							<div className="work-subtitle">
								Web Development Consultant
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./unigestion.jpg"
								alt="unigestion"
								className="work-image"
							/>
							<div className="work-title">Unigestion</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
