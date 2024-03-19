import {
  isKoreanSingleCharacter,
  koreanRo,
  koreanAppendRo,
  koreanRul,
  koreanAppendRul,
  isContainsKorean,
} from './methods';

export const korean = {
  isSingleCharacter: isKoreanSingleCharacter,
  ro: koreanRo,
  appendRo: koreanAppendRo,
  rul: koreanRul,
  appendRul: koreanAppendRul,
  isContainsKorean,
};

export default korean;
