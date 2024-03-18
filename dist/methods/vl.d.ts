/********************************************************************************************************************
 * {value, label, ...other} 객체 생성하여 반환하는 함수
 * @param value - value
 * @param label - label
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/
export type VL<V, L, Other extends object | undefined> = Other extends undefined ? {
    value: V;
    label: L;
} : {
    value: V;
    label: L;
} & Other;
export declare function vl<V, L, Other extends object | undefined, Result = VL<V, L, Other>>(value: V, label: L, other?: Other): Result;
export default vl;
