import React, { useEffect, useState } from "react";
import styles from "./step-one.module.scss";
import clientIcon from "../../../../../../assets/icons/customer.svg";
import customerIcon from "../../../../../../assets/icons/customer.svg";
import classNames from "classnames";

const StepOne = ({ onClick, setStep }) => {
	const [type, setType] = useState();

	useEffect(() => {
		if (type) {
			onClick(type);
			setStep(1);
		}
	}, [type]);

	return (
		<div className={styles.wrapper}>
			<div
				className={classNames(
					styles.customer,
					type === "customer" && styles.active
				)}
				onClick={() => setType("customer")}
			>
				<div className={styles.profile}>
					<img src={customerIcon} />
					<div className={styles.label}>
						<span className={styles.name}>I’m a customer</span>
						<span className={styles.desc}>I need help with daily tasks</span>
					</div>
				</div>
				<div className={styles.circle}></div>
			</div>
			<div
				className={classNames(
					styles.client,
					type === "client" && styles.active
				)}
				onClick={() => setType("client")}
			>
				<div className={styles.profile}>
					<img src={clientIcon} />
					<div className={styles.label}>
						<span className={styles.name}>I’m an executor</span>
						<span className={styles.desc}>
							I want to help people and make money doing it
						</span>
					</div>
				</div>
				<div className={styles.circle}></div>
			</div>
			<div className={styles.text}>
				Already have an account? <span>Log in</span>
			</div>
		</div>
	);
};

export { StepOne };
