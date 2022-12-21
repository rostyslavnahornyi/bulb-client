import { FC } from 'react';
import { DetailsProps } from './details.types';
import styles from './details.module.scss';
import InstagramIcon from '../../../../../assets/icons/instagram.svg';
import WebIcon from '../../../../../assets/icons/web.svg';
import { getRandomColor } from '../../../../utils/random-color';

const Details: FC<DetailsProps> = ({ biography, skills, socials }) => (
  <div className={styles.wrapper}>
    <div className={styles.row}>
      <h3>BIOGRAPHY</h3>
      <span className={styles.content}>{biography}</span>
    </div>
    <div className={styles.row}>
      <h3>SKILLS</h3>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill} style={{ background: getRandomColor() }}>
            {skill}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.row}>
      <h3>SOCIALS</h3>
      <div className={styles.socials}>
        <a
          href={socials.instagram}
          rel="noopener noreferrer"
          target={'_blank'}
          className={styles.social}>
          <img src={InstagramIcon} alt="instagram-icon" />
        </a>
        <a
          href={socials.website}
          rel="noopener noreferrer"
          target={'_blank'}
          className={styles.social}>
          <img src={WebIcon} alt="web-icon" />
        </a>
      </div>
    </div>
  </div>
);

export { Details };
