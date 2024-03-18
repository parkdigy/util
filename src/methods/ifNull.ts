/********************************************************************************************************************
 * 값이 null 인 경우 대체 값을 반환하는 함수
 * @param v 확인할 값
 * @param v2 대체 값
 * @returns 최종 값
 * ******************************************************************************************************************/

export function ifNull<TV, TNV>(v: TV | null, v2: TNV): TV | TNV {
  return v === null ? v2 : v;
}

export default ifNull;
