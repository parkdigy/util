import { maskingBatch, maskingName, maskingEmail, maskingTel, maskingBusinessNo, maskingPersonalNo } from './methods';

export const masking = {
  batch: maskingBatch,
  name: maskingName,
  email: maskingEmail,
  tel: maskingTel,
  businessNo: maskingBusinessNo,
  personalNo: maskingPersonalNo,
};

export default masking;
