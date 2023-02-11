import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';

const initData = 75;

export const probabilityAtom = atom({
  key: ATOM_KEY.PBT,
  default: initData,
});
