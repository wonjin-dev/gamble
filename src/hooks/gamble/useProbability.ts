import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {probabilityAtom} from '@store/gamble/pbt';
import useSound from '@hooks/useSound';
import {SOUNDS} from '@constants/sound';

const useProbability = () => {
  const [pbt, setPbt] = useRecoilState(probabilityAtom);
  const {play: successSound} = useSound(SOUNDS.SUCCESS);
  const {play: failSound} = useSound(SOUNDS.FAIL);

  const success = useCallback(() => {
    if (pbt > 25) {
      setPbt((prev) => prev - 10);
      successSound();
    }
  }, [pbt, setPbt, successSound]);

  const fail = useCallback(() => {
    if (pbt < 75) {
      setPbt((prev) => prev + 10);
      failSound();
    }
  }, [failSound, pbt, setPbt]);

  const reset = () => setPbt(75);

  return {pbt, success, fail, reset};
};

export default useProbability;
