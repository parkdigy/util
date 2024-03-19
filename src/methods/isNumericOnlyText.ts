/********************************************************************************************************************
 * 문자열에 숫자만 포함되어 있는지 확인하는 함수
 * @param v 확인할 값
 * @returns 숫자만 포함되어 있으면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/

export function isNumericOnlyText(v: string): boolean {
  return !/[^0-9]/gim.test(v);
}

export default isNumericOnlyText;