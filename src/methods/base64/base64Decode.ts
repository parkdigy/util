/********************************************************************************************************************
 * base64 디코딩 함수
 * @param encData 디코딩할 데이터
 * @returns base64 디코딩된 데이터
 * ******************************************************************************************************************/

export function base64Decode(encData: string) {
  return Buffer.from(encData, 'base64').toString('utf8');
}

export default base64Decode;
