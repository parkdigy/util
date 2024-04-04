/********************************************************************************************************************
 * 휴대전화번호 형식인지 확인하는 함수
 * @param v 확인할 값
 * @returns 휴대전화번호 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/

export function isMobileNo(v: string): boolean {
  return /(^(01(?:0|1|[6-9]))([0-9]{3,4})([0-9]{4,4})$)|(^(01(?:0|1|[6-9]))-([0-9]{3,4})-([0-9]{4,4})$)|(^\+(?:[-]?[0-9]){8,}$)/.test(
    v
  );
}

export default isMobileNo;
