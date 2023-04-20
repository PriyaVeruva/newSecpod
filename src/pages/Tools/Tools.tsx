import React from "react";
import CardComponent from "../../components/Card/CardComponent";
import {
	POWERFUL_TOOLS_CONTENT,
	SECURITY_AND_IT_HEADER_CONTENT,
	SECURITY_AND_IT_SUB_CONTENT,
} from "../../utils/cms";
import { cardContainerData } from "../LandingPage/data";
import styles from "../LandingPage/LandingPage.module.css";

function Tools() {
	return (
		<div className={styles.contentSection}>
			<marquee className={styles.marquee} >
				{POWERFUL_TOOLS_CONTENT}
				<span>{POWERFUL_TOOLS_CONTENT}</span>
			</marquee>
			<div className={styles.bodyContentSection2}>
			<div className={styles.titleContent}>
				{SECURITY_AND_IT_HEADER_CONTENT}{" "}
			</div>
			<div className={styles.titleSubContent}>
				{SECURITY_AND_IT_SUB_CONTENT}
			</div>
			</div>

			<div className={styles.cardContentSection}>
				{cardContainerData.map((ele, i) => {
					return (
						<CardComponent
							image={ele.image}
							heading={ele.heading}
							subHeading={ele.subHeading}
						/>
					);
				})}
			</div>
			<div className={styles.button}>
				<a
					className={styles.buttonContentSection}
					href="#getStarted"
				>
					GET STARTED
				</a>
			</div>
		</div>
	);
}

export default Tools;
