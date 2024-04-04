/********************************************************************************************************************
 * 주민등록번호에 하이픈 추가하는 함수
 * @param personalNo 주민등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 주민등록번호
 * ******************************************************************************************************************/
export declare function personalNoAutoDash(personalNo: string, allowCharacters?: string): string;
export default personalNoAutoDash;
