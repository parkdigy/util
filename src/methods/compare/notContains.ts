/********************************************************************************************************************
 * 배열에 특정 값이 포함되어 있지 않은지 여부를 반환하는 함수
 * @param list 확인할 배열 또는 문자열
 * @param value 확인할 값
 * @returns 미포함 여부
 * ******************************************************************************************************************/

type Value = any;

export function notContains<T extends Value, VT extends Value>(
  list: ReadonlyArray<T>,
  value: VT
): value is Exclude<VT, T> {
  let found = false;
  for (const v of list) {
    if (v as any === value) {
      found = true;
      break;
    }
  }
  return !found;
}

export default notContains;
