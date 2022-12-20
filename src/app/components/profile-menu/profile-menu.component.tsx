import { FC, MouseEvent, useRef } from 'react';
import { ProfileMenuProps } from './profile-menu.types';
import styles from './profile-menu.module.scss';
import classNames from 'classnames';
import AvatarIcon from '../../../assets/icons/user.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import LogoutIcon from '../../../assets/icons/logout.svg';
import DotIcon from '../../../assets/icons/dot.svg';
import { useClickOutside } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils';

const ProfileMenu: FC<ProfileMenuProps> = ({
  avatarSrc,
  firstName,
  email,
  setIsOpened,
  className,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useClickOutside(ref, () => setIsOpened(false));

  return (
    <div
      ref={ref}
      className={classNames(styles.wrapper, className)}
      style={style}
      onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
      <div className={styles.header}>
        <img src={avatarSrc ?? AvatarIcon} className={styles.avatar} alt={'avatar'} />
        <div className={styles.userInfo}>
          <span className={styles.firstname} onClick={() => navigate(ROUTES.PROFILE)}>
            {firstName}
          </span>
          <span className={styles.email}>{email}</span>
        </div>
      </div>

      <div className={styles.controlButtons}>
        <div className={styles.row}>
          <img src={SettingsIcon} alt="settings-icon" />
          <span>Settings</span>
        </div>
        <div className={styles.row}>
          <img src={LogoutIcon} alt="logout-icon" />
          <span>Logout</span>
        </div>
      </div>

      <div className={styles.versionFooter}>
        <span>v2594</span>
        <img src={DotIcon} alt="dot" />
        <span>22.10.2022</span>
      </div>
    </div>
  );
};

export { ProfileMenu };
