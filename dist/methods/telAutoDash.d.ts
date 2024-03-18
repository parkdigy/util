/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈 추가하는 함수
 * @param v 전화번호
 * @returns 하이픈 추가된 전화번호
 * ******************************************************************************************************************/
export declare function telAutoDash<T extends string | null | undefined, RT = T extends null ? null : T extends undefined ? undefined : string>(v: T): RT;
export default telAutoDash;
