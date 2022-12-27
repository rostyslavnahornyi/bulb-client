import React, { FC } from "react";
import styles from "./indicator.module.scss";


interface options {
  onClick: (value: any) => void;
  value: any
}

const Indicator: FC<options> = ({value = 0, onClick}) => {
	return <div className={styles.wrapper}>
		<div onClick={() => onClick(0)} className={value === 0 && styles.active || undefined}></div>
		<div onClick={() => onClick(1)} className={value === 1 && styles.active || undefined}></div>
		<div onClick={() => onClick(2)} className={value === 2 && styles.active || undefined}></div>
		<div onClick={() => onClick(3)} className={value === 3 && styles.active || undefined}></div>
	</div>;
};

export { Indicator };
