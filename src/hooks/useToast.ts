import {useRecoilState} from 'recoil';
import {toastAtom} from '@store/toast';

export const useToast = () => {
  const [toastMessages, setToastMessage] = useRecoilState<string[]>(toastAtom);
  const showToast = (text: string) => {
    setToastMessage([...toastMessages, text]);
  };
  const hideAllToast = () => {
    setToastMessage([]);
  };
  return {toastMessages, showToast, hideAllToast};
};
