import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {STRINGS} from '@constants/locales';
import {getLocalStorageItems, setLocalStorageItems} from '@utils/storage';
import {STORAGE_KEY} from '@constants/key';
import {localeAtom} from '@store/locale';
import useEffectOnce from './useEffectOnce';

export const enum LocaleType {
  KO = 'ko',
  EN = 'en',
}

const useTranslate = () => {
  const [lang, setLang] = useRecoilState<LocaleType>(localeAtom);

  useEffectOnce(() => {
    const saved: LocaleType = getLocalStorageItems(STORAGE_KEY.LOCALE);

    if (saved) {
      setLang(saved);
    }
  });

  const changeLangType = useCallback(() => {
    if (lang === LocaleType.KO) {
      setLang(LocaleType.EN);
      setLocalStorageItems(STORAGE_KEY.LOCALE, LocaleType.EN);
    } else {
      setLang(LocaleType.KO);
      setLocalStorageItems(STORAGE_KEY.LOCALE, LocaleType.KO);
    }
  }, [lang, setLang]);

  const translate = useCallback(
    (text: keyof typeof STRINGS) => {
      if (lang === LocaleType.KO) {
        return STRINGS[text].KO;
      } else {
        return STRINGS[text].EN;
      }
    },
    [lang]
  );

  return {changeLangType, translate};
};

export default useTranslate;
