import { LeftBarProps, PageLinkProps } from './left-bar.types';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import MarketplaceIcon from '../../../assets/icons/left-bar/marketplace.svg';
import ProfileIcon from '../../../assets/icons/left-bar/profile.svg';
import { ROUTES } from '../../utils';
import TasksIcon from '../../../assets/icons/left-bar/tasks.svg';
import classNames from 'classnames';
import styles from './left-bar.module.scss';

const links = [
  { icon: ProfileIcon, label: 'Profile', route: ROUTES.PROFILE },
  { icon: MarketplaceIcon, label: 'Marketplace', route: ROUTES.MARKETPLACE },
  { icon: TasksIcon, label: 'Tasks', route: ROUTES.TASKS },
];

const PageLink: FC<PageLinkProps> = ({ icon, label, route, isActive }) => {
  return (
    <div className={classNames(styles.pageLink, isActive && styles.isActive)}>
      <img src={icon} className={styles.linkIcon} alt="navbar-link-icon" />
      <Link to={route} className={styles.label}>
        {label}
      </Link>
    </div>
  );
};

const LeftBar: FC<LeftBarProps> = ({ isOpened = false }) => {
  const path = window?.location?.pathname;

  return (
    <div className={classNames(styles.wrapper, isOpened && styles.isOpened)}>
      <div className={styles.content}>
        {links.map((linkProps, index) => (
          <PageLink key={index} isActive={path === linkProps.route} {...linkProps} />
        ))}
      </div>

      <span className={styles.verticalSeparator} />
    </div>
  );
};

export { LeftBar };
