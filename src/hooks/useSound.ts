import {useCallback, useState} from 'react';
import useEffectOnce from './useEffectOnce';

const useSound = (src: string) => {
  const [sound, setSound] = useState<HTMLAudioElement>();

  useEffectOnce(() => {
    setSound(new Audio(src));
  });

  const play = useCallback(() => {
    sound && sound.play();
  }, [sound]);

  return {play};
};

export default useSound;
