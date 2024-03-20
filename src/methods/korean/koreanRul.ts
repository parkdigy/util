/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환된 문자열
 * ******************************************************************************************************************/

import empty from '../compare/empty';
import isKoreanSingleCharacter from './isKoreanSingleCharacter';

export function koreanRul(text?: string): string {
  if (empty(text)) return '';
  return isKoreanSingleCharacter(text) ? '를' : '을';
}

export default koreanRul;
