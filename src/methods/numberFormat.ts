/********************************************************************************************************************
 * 숫자 또는 문자열로 주어진 숫자에 콤마 추가하는 함수
 * @param num - 숫자 또는 문자열
 * @returns 콤마 추가된 문자열
 * ******************************************************************************************************************/

export function numberFormat(num: string | number): string {
  const numValue = typeof num === 'number' ? num.toString() : num.replace(/^0+(?=\d)/, '');
  const isInteger = /^\d+$/.test(numValue);

  if (!isInteger && numValue.includes('.')) {
    const [integerPart, decimalPart] = numValue.split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (decimalPart) {
      return `${formattedIntegerPart}.${decimalPart.replace(/\.?0+$/, '')}`;
    }
    return formattedIntegerPart;
  }

  return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default numberFormat;
