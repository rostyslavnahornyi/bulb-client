import { RefObject, useCallback, useEffect } from 'react';

/**
 * Used fo invoking callbacks, when clicking outside the ref element.
 */
const useClickOutside = (ref: RefObject<HTMLElement>, handleClickOutside: () => void): void => {
  const handleClick = useCallback(
    (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Element) && event.button !== 2) {
        handleClickOutside();
      }
    },
    [handleClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener('pointerdown', handleClick);
    return () => document.removeEventListener('pointerdown', handleClick);
  }, [handleClick]);
};

export { useClickOutside };
