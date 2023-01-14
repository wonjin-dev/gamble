import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GambleType} from '@hooks/gamble/useGamble';

export const positive1Atom = atom<GambleType>({
  key: ATOM_KEY.POSITIVE1,
  default: {
    ability: undefined,
    score: [],
  },
});
