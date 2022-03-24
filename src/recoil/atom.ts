import { atom } from 'recoil';

export const themeState = atom({
  key: 'isDark',
  default: false,
});
