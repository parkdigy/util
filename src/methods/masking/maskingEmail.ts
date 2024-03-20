/********************************************************************************************************************
 * 이메일 마스킹
 * ******************************************************************************************************************/

import notEmpty from '../compare/notEmpty';

export function maskingEmail(email: string) {
  let newEmail = email;
  if (notEmpty(email)) {
    const emails = email.split('@');
    const emailMaskingLength = Math.ceil(emails[0].length / 2);
    emails[0] = `${emails[0].substr(0, emails[0].length - emailMaskingLength)}${'*'.repeat(emailMaskingLength)}`;
    newEmail = emails.join('@');
  }
  return newEmail;
}

export default maskingEmail;
