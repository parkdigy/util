/********************************************************************************************************************
 * 값이 비어있는지 확인하는 함수
 * - Array 값이 비어있거나, Object 값이 비어있거나, 문자열이 비어있거나, null 또는 undefined 인 경우 true 반환
 * @param v 확인할 값
 * @returns 값이 비어있는지 여부
 * ******************************************************************************************************************/
export declare function empty<T>(v: T): v is Exclude<T, NonNullable<T>>;
export default empty;
