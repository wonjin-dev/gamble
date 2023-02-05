const preChecker = (): boolean => {
  try {
    return typeof window !== 'undefined';
  } catch {
    return false;
  }
};

export const getLocalStorageItems = (key: string) => {
  if (preChecker()) {
    const value = window.localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  }
};

export const setLocalStorageItems = (key: string, value: any) => {
  if (preChecker()) {
    const parsedValue = JSON.stringify(value);
    window.localStorage.setItem(key, parsedValue);
  }
};

export const removeLocalStorageItems = (key: string) => {
  if (preChecker()) {
    window.localStorage.removeItem(key);
  }
};
