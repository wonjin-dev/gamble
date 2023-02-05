import {atom} from 'recoil';
import {ATOM_KEY} from '@constants/key';
import {LocaleType} from '@hooks/useTranslate';

const initData = 'ko' as LocaleType;

export const localeAtom = atom<LocaleType>({
  key: ATOM_KEY.LOCALE,
  default: initData,
});
