/********************************************************************************************************************
 * 주민등록번호 마스킹
 * ******************************************************************************************************************/

import notEmpty from '../compare/notEmpty';
import personalNoAutoDash from '../personalNo/personalNoAutoDash';

export function maskingPersonalNo(personalNo: string) {
  let newPersonalNo = personalNo;
  if (notEmpty(personalNo)) {
    const autoDash = personalNo.includes('-');
    const newPersonalNos = personalNoAutoDash(personalNo).split('-');
    if (personalNo.length > 1) {
      newPersonalNos[1] = '*'.repeat(newPersonalNos[1].length);
    }
    newPersonalNo = newPersonalNos.join('');
    if (autoDash) {
      newPersonalNo = personalNoAutoDash(newPersonalNo);
    }
  }
  return newPersonalNo;
}

export default maskingPersonalNo;
