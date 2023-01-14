import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GambleType} from '@hooks/gamble/useGamble';

export const negativeAtom = atom<GambleType>({
  key: ATOM_KEY.NEAGTIVE,
  default: {
    ability: undefined,
    score: [],
  },
});
