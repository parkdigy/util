/********************************************************************************************************************
 * 값이 포함되어 있는 경우 대체 값을 반환하는 함수
 * @param list 확인할 배열 또는 문자열
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/

import contains from "./contains";

type Value = any;

export function ifContains<T extends Value, V extends Value, V2>(list: ReadonlyArray<T>, v: V, v2: V2){
  return contains(list, v) ? v2 : v;
}

export default ifContains;
