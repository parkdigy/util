/********************************************************************************************************************
 * {label, value, ...other} 객체 생성하여 반환하는 함수
 * @param label - label
 * @param value - value
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/

export type LV<L, V, Other extends object> = { label: L; value: V } & Other;

export function lv<L, V, Result = LV<L, V, NonNullable<unknown>>>(label: L, value: V): Result;
export function lv<L, V, Other extends object, Result = LV<V, L, Other>>(label: L, value: V, other: Other): Result;
export function lv(label: any, value: any, other?: object) {
  return { label, value, ...other };
}

export default lv;
