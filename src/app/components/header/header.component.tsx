import { FC, useState } from 'react';

import BurgerMenuIcon from '../../../assets/icons/burger-menu.svg';
import { HeaderProps } from './header.types';
import PlusIcon from '../../../assets/icons/plus.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import { Input } from './components';
import UserIcon from '../../../assets/icons/user.svg';
import classNames from 'classnames';
import styles from './header.module.scss';
import { ProfileMenu } from '../profile-menu';
import { useNavigate } from 'react-router-dom';

const Header: FC<HeaderProps> = ({ leftBarIsOpened, setLeftBarIsOpened }) => {
  const [profileMenuIsOpened, setProfileMenuIsOpened] = useState<boolean>(false);

  const searchInputChangeHandler = (value: string) => {
    // TODO
    value;
  };
  const nav = useNavigate();

  return (
    <header className={styles.wrapper}>
      <div className={styles.leftBlock}>
        <button
          onClick={() => setLeftBarIsOpened(!leftBarIsOpened)}
          className={classNames(styles.burgerMenuButton, leftBarIsOpened && styles.isOpened)}>
          <img src={BurgerMenuIcon} alt="burger-menu" />
        </button>
        <button className={styles.profileButton}>
          <img src={ProfileIcon} className={styles.profileIcon} alt="profile-icon" />
        </button>
        <Input onChange={searchInputChangeHandler} placeholder={'Search'} />
      </div>

      <div className={styles.rightBlock}>
        {/* 
					TODO: if type === customer => added button to add task.	
				*/}
        <button className={styles.addTaskButton} onClick={() => nav('/tasks/create')}>
          <img src={PlusIcon} alt="add-task" className={styles.plusIcon} />
        </button>
        {/* 
          TODO: if user found ? userSrc : userIcon
         */}
        <button
          className={styles.userSettingsButton}
          onClick={() => setProfileMenuIsOpened(!profileMenuIsOpened)}>
          <img src={UserIcon} alt="user" className={styles.userIcon} />
          {/* 
            TODO: insert data from axios. Added avatarSrc to props
           */}
          {profileMenuIsOpened && (
            <ProfileMenu
              email="rostyslav.nahornyi@nure.ua"
              firstName="Rostyslav"
              style={{ top: '38px', right: '0px' }}
              setIsOpened={setProfileMenuIsOpened}
            />
          )}
        </button>
      </div>
    </header>
  );
};

export { Header };
