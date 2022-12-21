import { FC } from 'react';
import { Details, ProfileInfo, Reviews } from './components';
import styles from './profile-page.module.scss';
import ProfileBg from '../../../assets/imgs/profile-bg.png';

const mockedReviews = [
  {
    fullname: 'Steve Fletcher',
    authorRating: 4.9,
    publishedDate: new Date() as unknown as number,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    fullname: 'Steve Fletcher',
    authorRating: 3.2,
    publishedDate: new Date() as unknown as number,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    fullname: 'Steve Fletcher',
    authorRating: 2.9,
    publishedDate: new Date() as unknown as number,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    fullname: 'Steve Fletcher',
    authorRating: 4.9,
    publishedDate: new Date() as unknown as number,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    fullname: 'Steve Fletcher',
    authorRating: 4.9,
    publishedDate: new Date() as unknown as number,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const mockedDetails = {
  biography:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  skills: ['Adobe Photoshop', 'Adobe XD CC', 'ReactJS'],
  socials: {
    website: 'https://www.dl.nure.ua',
    instagram: 'https://www.instagram.com/kharkiv.it.cluster/',
  },
};

const ProfilePage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo
        user={{ firstName: 'Rostyslav', lastName: 'Nahornyi', position: 'Designer' }}
        stats={{ completedTasks: 42, contacts: 533, reviews: 115, rating: 3.2 }}
      />
      <div className={styles.content}>
        <img src={ProfileBg} alt="profile-bg" />
        <div className={styles.main}>
          <Reviews reviews={mockedReviews} />
          <Details {...mockedDetails} />
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
