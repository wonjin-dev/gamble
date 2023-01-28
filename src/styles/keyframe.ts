import {keyframes} from '@emotion/react';

export const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  } 
`;

export const slideIn = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0.5;
}
100% {
  transform: translateY(0%);
  opacity: 1;
}
`;
