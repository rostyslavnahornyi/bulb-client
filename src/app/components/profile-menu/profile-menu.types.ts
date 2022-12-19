import { HTMLAttributes } from 'react';
interface ProfileMenuProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  readonly avatarSrc?: string;
  readonly firstName?: string;
  readonly email?: string;
  readonly setIsOpened: (value: boolean) => void;
}

export type { ProfileMenuProps };
