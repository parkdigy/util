/********************************************************************************************************************
 * 값이 null 또는 undefined 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/
export declare function ifNullOrUndefined<TV, TNV>(v: TV | null | undefined, v2: TNV): TV | TNV;
export default ifNullOrUndefined;
