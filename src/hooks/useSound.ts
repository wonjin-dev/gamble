import {useCallback, useState} from 'react';
import useEffectOnce from './useEffectOnce';

const useSound = (src: string) => {
  const [sound, setSound] = useState<HTMLAudioElement | undefined>();

  useEffectOnce(() => {
    setSound(new Audio(src));
  });

  const play = useCallback(() => {
    if (sound) {
      sound.play();
    }
  }, [sound]);

  return {play};
};

export default useSound;
