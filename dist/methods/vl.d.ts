/********************************************************************************************************************
 * {value, label, ...other} 객체 생성하여 반환하는 함수
 * @param value - value
 * @param label - label
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/
export type VL<V, L, Other extends object> = {
    value: V;
    label: L;
} & Other;
export declare function vl<V, L, Result = VL<V, L, NonNullable<unknown>>>(value: V, label: L): Result;
export declare function vl<V, L, Other extends object, Result = VL<V, L, Other>>(value: V, label: L, other: Other): Result;
export default vl;
