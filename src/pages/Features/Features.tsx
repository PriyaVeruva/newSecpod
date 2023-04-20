import React from "react";
import Slider from "react-slick";
import { HEADER_CONTENT_2, PARAGRAPH_CONTENT_2 } from "../../utils/cms";
import { carouselDataContent2 } from "../LandingPage/data";
import styles from "../LandingPage/LandingPage.module.css";
function Features() {
	const settings = {
		dots: true,
		infinite: true,
		arrow: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className={styles.bodyContent2} id="features">
			<div className={styles.bodyContentSection2}>
			<div className={styles.headerContent3}>{HEADER_CONTENT_2}</div>

			<div className={styles.paragraphContent}>
				{PARAGRAPH_CONTENT_2}
			</div>
</div>

			<div className={styles.carouselSlider}>
				<Slider {...settings}>
					{carouselDataContent2.map((ele, i) => {
						return (
							<div className={styles.carouselVisibility}>
								<div
									className={
										styles.carouselContentSection2
									}
								>
									<div
										className={
											styles.carouselHeaderContent
										}
									>
										{ele.header}
									</div>
									<div
										className={
											styles.carouselsubHeaderContent
										}
									>
										{ele.subHeader}
									</div>
								</div>
								<img
									src={ele.image}
									alt=""
									className={
										styles.carousel2ImageSection
									}
								/>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
}

export default Features;
