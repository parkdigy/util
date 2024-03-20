/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 추가하는 함수입니다.
 * @param text 문자열
 * @param addSpace 공백을 추가할지 여부
 * @returns 변환된 문자열
 * ******************************************************************************************************************/

import empty from '../compare/empty';
import isKoreanSingleCharacter from './isKoreanSingleCharacter';

export function koreanAppendRul(text?: string, addSpace?: boolean): string {
  if (empty(text)) return '';
  return `${text}${addSpace ? ' ' : ''}${isKoreanSingleCharacter(text) ? '를' : '을'}`;
}

export default koreanAppendRul;
