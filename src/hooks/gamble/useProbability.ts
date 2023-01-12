import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {probabilityAtom} from 'src/store/gamble/pbt';

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

  return {pbt, success, fail};
};

export default useProbability;