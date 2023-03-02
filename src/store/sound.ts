import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';

const initData = false;

export const soundMuteAtom = atom<boolean>({
  key: ATOM_KEY.SOUND_MUTE,
  default: initData,
});
