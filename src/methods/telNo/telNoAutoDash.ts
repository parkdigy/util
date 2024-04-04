/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈 추가하는 함수
 * @param v 전화번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 전화번호
 * ******************************************************************************************************************/

export function telNoAutoDash<
  T extends string | null | undefined,
  RT = T extends null ? null : T extends undefined ? undefined : string,
>(v: T, allowCharacters = '*'): RT {
  if (v === undefined) return undefined as RT;
  if (v === null) return null as RT;

  const str = v.replace(new RegExp(`[^0-9${allowCharacters}]`, 'g'), '');
  const isLastDash = v.substring(v.length - 1, v.length) === '-';

  if (str.substring(0, 1) !== '0' && !['15', '16', '18'].includes(str.substring(0, 2))) {
    return str as RT;
  }

  let tmp = '';
  let preLen;

  switch (str.substring(0, 2)) {
    case '02':
      preLen = 2;
      break;
    case '15':
    case '16':
    case '18':
      preLen = 4;
      break;
    default:
      preLen = 3;
  }

  if (['15', '16', '18'].includes(str.substring(0, 2))) {
    if (str.length <= preLen) {
      tmp = str;
    } else if (str.length <= preLen + 4) {
      tmp += str.substring(0, preLen);
      tmp += '-';
      tmp += str.substring(preLen);
    } else {
      tmp = str;
    }
  } else if (str.length <= preLen) {
    tmp = str;
  } else if (str.length <= preLen + 3) {
    tmp += str.substring(0, preLen);
    tmp += '-';
    tmp += str.substring(preLen);
  } else if (str.length <= preLen + 7) {
    tmp += str.substring(0, preLen);
    tmp += '-';
    tmp += str.substring(preLen, preLen + 3);
    tmp += '-';
    tmp += str.substring(preLen + 3);
  } else if (str.length <= preLen + 8) {
    tmp += str.substring(0, preLen);
    tmp += '-';
    tmp += str.substring(preLen, preLen + 4);
    tmp += '-';
    tmp += str.substring(preLen + 4);
  } else {
    tmp = str;
  }

  if (isLastDash) {
    if (str.length === preLen) {
      tmp += '-';
    }
  }

  return tmp as RT;
}

export default telNoAutoDash;
