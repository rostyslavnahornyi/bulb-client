import React from "react";
import styles from "./title.module.scss";
import LogoIcon from "../../../../../assets/imgs/logo.png";

const Title = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<img src={LogoIcon} />
				<div className={styles.lightBg}></div>
			</div>

			<div className={styles.title}>
				<h2>Automate your daily work</h2>
				<h3>Are you a customer or an executor?</h3>
			</div>
		</div>
	);
};

export { Title };
