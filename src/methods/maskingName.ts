/********************************************************************************************************************
 * 이름 마스킹
 * ******************************************************************************************************************/

import notEmpty from './notEmpty';

export function maskingName(name: string) {
  let newName = name;
  if (notEmpty(name)) {
    if (name.length === 1) {
      newName = '*';
    } else if (name.length === 2) {
      newName = `${name[0]}*`;
    } else {
      newName = `${name[0]}${'*'.repeat(name.length - 2)}${name[name.length - 1]}`;
    }
  }
  return newName;
}

export default maskingName;
