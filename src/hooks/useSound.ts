import {useCallback, useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {soundMuteAtom} from '@store/sound';
import useEffectOnce from './useEffectOnce';

const useSound = (src: string) => {
  const [sound, setSound] = useState<HTMLAudioElement | undefined>();
  const [muteMode, setMuteMode] = useRecoilState(soundMuteAtom);

  useEffectOnce(() => {
    setSound(new Audio(src));
  });

  useEffect(() => {
    if (muteMode) {
      setSound(undefined);
    }
  }, [muteMode]);

  const muteToggle = useCallback(() => setMuteMode(!muteMode), [muteMode, setMuteMode]);

  const play = useCallback(() => {
    if (sound) {
      sound.play();
    }
  }, [sound]);

  return {play, muteToggle};
};

export default useSound;
