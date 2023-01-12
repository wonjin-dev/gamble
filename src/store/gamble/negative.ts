import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GambleType} from '@hooks/gamble/useEnchant';

const initData: GambleType = {
  ability: undefined,
  score: [],
  isOver: false,
};

export const negativeAtom = atom({
  key: ATOM_KEY.NEAGTIVE,
  default: initData,
});
