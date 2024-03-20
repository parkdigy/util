/********************************************************************************************************************
 * 사업자등록번호 마스킹
 * ******************************************************************************************************************/

import notEmpty from '../compare/notEmpty';
import companyNoAutoDash from '../companyNo/companyNoAutoDash';

export function maskingCompanyNo(companyNo: string) {
  let newCompanyNo = companyNo;
  if (notEmpty(companyNo)) {
    const autoDash = companyNo.includes('-');
    const newCompanyNos = companyNoAutoDash(companyNo).split('-');
    if (companyNo.length > 2) {
      newCompanyNos[2] = '*'.repeat(newCompanyNos[2].length);
    }
    newCompanyNo = newCompanyNos.join('');
    if (autoDash) {
      newCompanyNo = companyNoAutoDash(newCompanyNo);
    }
  }
  return newCompanyNo;
}

export default maskingCompanyNo;
