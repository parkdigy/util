/********************************************************************************************************************
 * 값이 null 과 undefined 가 아닌 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/

export function ifNotNullAndUndefined<TV, TNV>(v: TV, v2: TNV): TV | TNV {
  return v != null ? v2 : v;
}

export default ifNotNullAndUndefined;
