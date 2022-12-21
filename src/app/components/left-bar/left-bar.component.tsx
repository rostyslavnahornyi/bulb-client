import { LeftBarProps, PageLinkProps } from './left-bar.types';

import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import MarketplaceIcon from '../../../assets/icons/left-bar/marketplace.svg';
import ProfileIcon from '../../../assets/icons/left-bar/profile.svg';
import { ROUTES } from '../../utils';
import TasksIcon from '../../../assets/icons/left-bar/tasks.svg';
import classNames from 'classnames';
import styles from './left-bar.module.scss';
import { useClickOutside } from '../../hooks';

const links = [
  { icon: ProfileIcon, label: 'Profile', route: ROUTES.PROFILE },
  { icon: MarketplaceIcon, label: 'Marketplace', route: ROUTES.MARKETPLACE },
  { icon: TasksIcon, label: 'Tasks', route: ROUTES.TASKS },
];

const PageLink: FC<PageLinkProps> = ({ icon, label, route, isActive, onClick }) => {
  return (
    <Link
      to={route}
      onClick={onClick}
      className={classNames(styles.pageLink, isActive && styles.isActive)}>
      <img src={icon} className={styles.linkIcon} alt="navbar-link-icon" />
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

const LeftBar: FC<LeftBarProps> = ({ isOpened = false, setIsOpened }) => {
  const path = window?.location?.pathname;
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOpened(false));

  return (
    <div className={classNames(styles.wrapper, isOpened && styles.isOpened)} ref={ref}>
      <div className={styles.content}>
        {links.map((linkProps, index) => (
          <PageLink
            key={index}
            isActive={path === linkProps.route}
            onClick={() => setIsOpened(false)}
            {...linkProps}
          />
        ))}
      </div>

      <span className={styles.verticalSeparator} />
    </div>
  );
};

export { LeftBar };
