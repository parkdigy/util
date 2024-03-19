/********************************************************************************************************************
 * weekDay 에 해당하는 요일을 한글로 반환하는 함수
 * ******************************************************************************************************************/

export function weekDayText(weekDay: number): string {
  switch (weekDay) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    default:
      return '';
  }
}

export default weekDayText;
