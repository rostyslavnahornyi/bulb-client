interface TaskProps {
  id: string;
  title: string;
  price: number;
  tag: string;
  participants: number;
  creationDate: number;
  author?: string;
  date?: number;
  location?: string;
  locationStart?: string;
  locationEnd?: string;
  time?: number;
  timeStart?: number;
  timeEnd?: number;
}

export type { TaskProps };
