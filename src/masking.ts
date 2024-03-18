import { maskingBatch, maskingName, maskingEmail, maskingTel, maskingCompanyNo, maskingPersonalNo } from './methods';

export const masking = {
  batch: maskingBatch,
  name: maskingName,
  email: maskingEmail,
  tel: maskingTel,
  companyNo: maskingCompanyNo,
  personalNo: maskingPersonalNo,
};

export default masking;
