/********************************************************************************************************************
 * 배열이나 문자열에 특정 값이 포함되어 있는지 확인하는 함수
 * @param list 확인할 배열 또는 문자열
 * @param value 확인할 값
 * @returns 포함 여부
 * ******************************************************************************************************************/

export function contains<T extends string | number | boolean | null | undefined>(
  list: ReadonlyArray<T>,
  value: string | number | boolean | null | undefined
): boolean {
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
