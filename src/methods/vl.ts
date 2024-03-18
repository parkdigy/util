/********************************************************************************************************************
 * {value, label, ...other} 객체 생성하여 반환하는 함수
 * @param value - value
 * @param label - label
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/

export type VL<V, L, Other extends object | undefined> = Other extends undefined
  ? { value: V; label: L }
  : { value: V; label: L } & Other;

export function vl<V, L, Other extends object | undefined, Result = VL<L, V, Other>>(
  value: V,
  label: L,
  other?: Other
): Result {
  return { value, label, ...other } as Result;
}

export default vl;
