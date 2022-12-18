import { FC, useState } from 'react';
import ProfileIcon from '../../../assets/icons/profile.svg';
import BurgerMenuIcon from '../../../assets/icons/burger-menu.svg';
import styles from './header.module.scss';
import { Input as SearchInput } from './components';
import UserIcon from '../../../assets/icons/user.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import classNames from 'classnames';
import { HeaderProps } from './header.types';

const Header: FC<HeaderProps> = ({ leftBarIsOpened, setLeftBarIsOpened }) => {
  const searchInputChangeHandler = (value: string) => {
    // TODO
    value;
  };

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
        <SearchInput onChange={searchInputChangeHandler} placeholder={'Search'} />
      </div>

      <div className={styles.rightBlock}>
        {/* 
					TODO: if type === customer => added button to add task.	
				*/}
        <button className={styles.addTaskButton}>
          <img src={PlusIcon} alt="add-task" className={styles.plusIcon} />
        </button>
        <button className={styles.userSettingsButton}>
          <img src={UserIcon} alt="user" className={styles.userIcon} />
        </button>
      </div>
    </header>
  );
};

export { Header };
