/********************************************************************************************************************
 * UUID 생성하는 함수
 * @param removeDash 하이픈 제거 여부
 * @returns UUID
 * ******************************************************************************************************************/

import { v4 as _uuid } from 'uuid';

export function uuid(removeDash?: boolean): string {
  const id = _uuid();
  if (removeDash) {
    return id.replace(/-/g, '');
  } else {
    return id;
  }
}

export default uuid;
