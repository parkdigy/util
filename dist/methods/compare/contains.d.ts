/********************************************************************************************************************
 * 배열이나 문자열에 특정 값이 포함되어 있는지 확인하는 함수
 * @param list 확인할 배열 또는 문자열
 * @param value 확인할 값
 * @returns 포함 여부
 * ******************************************************************************************************************/
export declare function contains<T extends string | number | boolean | null | undefined>(list: ReadonlyArray<T>, value: string | number | boolean | null | undefined): boolean;
export default contains;
