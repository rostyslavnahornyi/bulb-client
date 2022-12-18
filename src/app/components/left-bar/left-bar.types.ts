import { ROUTES } from '../../utils';

type LeftBarProps = { readonly isOpened?: boolean };

interface PageLinkProps {
  readonly icon: string;
  readonly label: string;
  readonly route: ROUTES;
	readonly isActive: boolean;
}

export type { LeftBarProps, PageLinkProps };
