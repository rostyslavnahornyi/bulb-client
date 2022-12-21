import { ReactNode } from 'react';

interface ReviewProps {
  readonly avatar?: ReactNode;
  readonly fullname: string;
  readonly authorRating: number;
  readonly publishedDate: number;
  readonly content: string;
}

export type { ReviewProps };
