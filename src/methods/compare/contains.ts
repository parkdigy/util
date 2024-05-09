/********************************************************************************************************************
 * 배열에 특정 값이 포함되어 있는지 여부를 반환하는 함수
 * @param list 확인할 배열 또는 문자열
 * @param value 확인할 값
 * @returns 포함 여부
 * ******************************************************************************************************************/

type Value = string | number | boolean | null | undefined | bigint | object;

export function contains<T extends Value>(list: ReadonlyArray<T>, value: Value): value is T {
  let found = false;
  for (const v of list) {
    if (v === value) {
      found = true;
      break;
    }
  }
  return found;
}

export default contains;
