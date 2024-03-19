/********************************************************************************************************************
 * URL 형식인지 확인하는 함수
 * @param v 확인할 값
 * @param allowInnerUrl 내부 URL을 허용할지 여부
 * @returns URL 형식이면 true, 그렇지 않으면 false 반환
 * ******************************************************************************************************************/

export function isUrl(v: string, allowInnerUrl?: boolean): boolean {
  if (allowInnerUrl) {
    return /^((?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)|\/)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/.test(v);
  } else {
    return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/.test(v);
  }
}

export default isUrl;
