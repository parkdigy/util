/********************************************************************************************************************
 * 전화번호 마스킹
 * ******************************************************************************************************************/

import telNoAutoDash from '../telNo/telNoAutoDash';
import notEmpty from '../compare/notEmpty';

export function maskingTel(tel: string) {
  let newTel = tel;
  if (notEmpty(tel)) {
    const authDash = tel.includes('-');
    const mobileNums = telNoAutoDash(tel).split('-');
    switch (mobileNums.length) {
      case 1:
        mobileNums[0] = `${mobileNums[0].substring(0, 3)}${'*'.repeat(mobileNums[0].length - 3)}`;
        break;
      default:
        mobileNums[1] = '*'.repeat(mobileNums[1].length);
        break;
    }
    newTel = mobileNums.join('');
    if (authDash) {
      newTel = telNoAutoDash(newTel);
    }
  }
  return newTel;
}

export default maskingTel;
