import { useEffect, useState } from 'react';

/** Next.js or SSR hook to be able to use the `window` object.
 * When this is running outside the browser, regular `window` will be undefined and cause runtime errors
 */
export const useWindow = () => {
  const initialWindow = typeof window === 'undefined' ? ({} as Window) : window;
  const [localWindow, setLocalWindow] = useState<Window>(initialWindow);
  useEffect(() => {
    // biome-ignore lint/correctness/noConstantCondition: <explanation>
    if (typeof window) {
      setLocalWindow(window);
    }
  }, []);

  const isMobile = (initialWindow && initialWindow.innerWidth <= 600) || false;

  return { localWindow, isMobile };
};
