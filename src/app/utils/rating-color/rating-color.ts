/**
 * Depending on the rating, chooses a color
 */
const getRatingColor = (rating: number): string => {
  switch (true) {
    case rating >= 0 && rating < 3: {
      return '#A72800';
    }

    case rating >= 3 && rating < 4: {
      return '#A3A700';
    }

    case rating >= 4 && rating < 5: {
      return '#00A711';
    }

    default:
      return '#fff';
  }
};

export { getRatingColor };
