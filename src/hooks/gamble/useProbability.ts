import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {probabilityAtom} from '@store/gamble/pbt';

const useProbability = () => {
  const [pbt, setPbt] = useRecoilState(probabilityAtom);

  const success = useCallback(() => {
    if (pbt > 25) {
      setPbt((prev) => prev - 10);
    }
  }, [pbt, setPbt]);

  const fail = useCallback(() => {
    if (pbt < 75) {
      setPbt((prev) => prev + 10);
    }
  }, [pbt, setPbt]);

  const reset = () => setPbt(75);

  return {pbt, success, fail, reset};
};

export default useProbability;
