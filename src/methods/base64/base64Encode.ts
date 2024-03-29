/********************************************************************************************************************
 * base64 인코딩 함수
 * @param data 인코딩할 데이터
 * @returns base64 인코딩된 데이터
 * ******************************************************************************************************************/

export function base64Encode(data: string) {
  return Buffer.from(data, 'utf8').toString('base64');
}

export default base64Encode;
