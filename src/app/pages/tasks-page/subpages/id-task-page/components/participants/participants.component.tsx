import React from "react";
import styles from "./participants.module.scss";
import ParticipantAvatar from "../../../../../../../assets/imgs/participant_avatar.jpg";

/**
 * Renders Participants
 */
const Participants = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>Participants</span>

			<span className={styles.subtitle}>
				This job has already received 9 participants
			</span>

			<div className={styles.participants}>
				<img src={ParticipantAvatar} alt={"participant_avatar"} />
				<img src={ParticipantAvatar} alt={"participant_avatar"} />
				<img src={ParticipantAvatar} alt={"participant_avatar"} />
				<img src={ParticipantAvatar} alt={"participant_avatar"} />
				<img src={ParticipantAvatar} alt={"participant_avatar"} />

				<div className={styles.missingParticipants}>+4</div>
			</div>
		</div>
	);
};

export { Participants };
