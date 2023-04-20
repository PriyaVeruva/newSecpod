import React from "react";
import FeaturesCardComponent from "../../components/Card/FeaturesCardComponent";
import { HEADER_CONTENT_3, PARAGRAPH_CONTENT_3 } from "../../utils/cms";
import { cardContainerData2 } from "../LandingPage/data";
import styles from "../LandingPage/LandingPage.module.css";
function Pricing() {
	return (
		<div className={styles.contentSection2}>
			<div className={styles.headerContent3}>{HEADER_CONTENT_3}</div>
			<div className={styles.paragraphContent}>
				{PARAGRAPH_CONTENT_3}
			</div>
			<div className={styles.cardContentSection}>
				{cardContainerData2.map((ele, i) => {
					return (
						<FeaturesCardComponent
							id={ele.id}
							heading={ele.heading}
							subHeading={ele.subHeading}
							featuresText={ele.featuresText}
							features={ele.features}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Pricing;
