import React from "react";
import "./Card.css";
interface CardProps {
	heading: string;
	subHeading: string;
	image: string;
}
const CardComponent: React.FC<CardProps> = ({ heading, subHeading, image }) => {
	return (
		<div className="card-contents">
			<div className="image">
				<img src={image} alt="" />
			</div>
			<div className="header">{heading}</div>
			<div className="sub-heading">{subHeading}</div>
		</div>
	);
};

export default CardComponent;
