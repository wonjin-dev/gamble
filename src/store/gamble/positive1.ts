import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {GambleType} from '@hooks/gamble/useEnchant';

const initData: GambleType = {
  ability: undefined,
  score: [],
  isOver: false,
};

export const positive1Atom = atom({
  key: ATOM_KEY.POSITIVE1,
  default: initData,
});