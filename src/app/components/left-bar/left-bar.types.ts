import { HTMLAttributes } from 'react';
import { ROUTES } from '../../utils';

type LeftBarProps = { readonly isOpened?: boolean; readonly setIsOpened: (value: boolean) => void };

interface PageLinkProps extends Pick<HTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  readonly icon: string;
  readonly label: string;
  readonly route: ROUTES;
  readonly isActive: boolean;
}

export type { LeftBarProps, PageLinkProps };
