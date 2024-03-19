/********************************************************************************************************************
 * 주어진 한글의 로/으로 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환된 문자열
 * ******************************************************************************************************************/

import empty from './empty';
import isKoreanSingleCharacter from './isKoreanSingleCharacter';

export function koreanRo(text?: string): string {
  if (empty(text)) return '';
  return isKoreanSingleCharacter(text) ? '로' : '으로';
}

export default koreanRo;
