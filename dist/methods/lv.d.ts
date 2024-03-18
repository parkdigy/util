/********************************************************************************************************************
 * {label, value, ...other} 객체 생성하여 반환하는 함수
 * @param label - label
 * @param value - value
 * @param other - 기타 속성
 * @returns 생성된 객체
 * ******************************************************************************************************************/
export type LV<L, V, Other extends object | undefined> = Other extends undefined ? {
    label: L;
    value: V;
} : {
    label: L;
    value: V;
} & Other;
export declare function lv<L, V, Other extends object | undefined, Result = LV<V, L, Other>>(label: L, value: V, other?: Other): Result;
export default lv;
