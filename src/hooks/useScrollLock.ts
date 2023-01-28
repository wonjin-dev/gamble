import {useEffect} from 'react';

const useScrollLock = (init: boolean) => {
  useEffect(() => {
    if (!init) {
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [init]);
};

export default useScrollLock;
