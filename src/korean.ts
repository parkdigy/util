import { isKoreanSingleCharacter, koreanRo, koreanAppendRo, koreanRul, koreanAppendRul } from './methods';

export const korean = {
  isSingleCharacter: isKoreanSingleCharacter,
  ro: koreanRo,
  appendRo: koreanAppendRo,
  rul: koreanRul,
  appendRul: koreanAppendRul,
};

export default korean;
