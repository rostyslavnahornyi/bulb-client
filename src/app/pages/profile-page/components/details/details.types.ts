interface DetailsProps {
  readonly biography?: string;
  readonly skills: ReadonlyArray<string>;
  readonly socials: {
    readonly website: string;
    readonly instagram: string;
  };
}

export type { DetailsProps };
