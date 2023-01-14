import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GambleType} from '@hooks/gamble/useGamble';

export const positive2Atom = atom<GambleType>({
  key: ATOM_KEY.POSITIVE2,
  default: {
    ability: undefined,
    score: [],
  },
});
