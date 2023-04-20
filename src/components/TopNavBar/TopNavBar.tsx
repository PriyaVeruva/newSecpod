import styles from "./TopNavBar.module.css";
import { HeaderData } from "./data";
function TopNavBar() {
	return (
		<div className={styles.header}>
			<span className={styles.Logo}>
				Saner<span className={styles.text_style_1}>Now</span>
			</span>
			<ul className={styles.nav_links}>
				{HeaderData.map((ele, i) => {
					return (
						<li>
							<a
								href={ele.path}
								className={
									ele.type !== "button"
										? styles.mobileHide
										: styles.button
								}
							>
								{ele.name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TopNavBar;
