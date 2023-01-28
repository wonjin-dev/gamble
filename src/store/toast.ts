import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';

export const toastAtom = atom<string[]>({
  key: ATOM_KEY.TOAST,
  default: [],
});
