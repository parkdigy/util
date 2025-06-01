/********************************************************************************************************************
 * 사업자등록번호 마스킹
 * ******************************************************************************************************************/

import notEmpty from '../compare/notEmpty';
import businessNoAutoDash from '../businessNo/businessNoAutoDash';

export function maskingBusinessNo(businessNo: string) {
  let newCompanyNo = businessNo;
  if (notEmpty(businessNo)) {
    const autoDash = businessNo.includes('-');
    const newCompanyNos = businessNoAutoDash(businessNo).split('-');
    if (businessNo.length > 2) {
      newCompanyNos[2] = '*'.repeat(newCompanyNos[2].length);
    }
    newCompanyNo = newCompanyNos.join('');
    if (autoDash) {
      newCompanyNo = businessNoAutoDash(newCompanyNo);
    }
  }
  return newCompanyNo;
}

export default maskingBusinessNo;
