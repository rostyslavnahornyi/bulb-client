import { ReactNode } from 'react';

interface ProfileInfoProps {
  readonly avatar?: ReactNode;
  readonly user: {
    readonly firstName: string;
    readonly lastName: string;
    readonly position: string;
  };
  readonly stats: {
		readonly completedTasks: number;
		readonly contacts: number;
		readonly reviews: number;
		readonly rating: number;
	}
}

export type { ProfileInfoProps };
