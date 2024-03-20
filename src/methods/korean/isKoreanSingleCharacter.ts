export function isKoreanSingleCharacter(text: string) {
  const strGa = 44032; // 가
  const strHih = 55203; // 힣

  const lastStrCode = text.charCodeAt(text.length - 1);

  if (lastStrCode < strGa || lastStrCode > strHih) {
    return false; //한글이 아닐 경우 false 반환
  }
  return (lastStrCode - strGa) % 28 == 0;
}

export default isKoreanSingleCharacter;
