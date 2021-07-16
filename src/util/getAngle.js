export default function getAngle(time, type) {
  const [HOUR, MINUTE, SECOND] = [0, 1, 2];
  const { hour, minute, second, millisecond } = time;
  /**
   * 1시간: 360/12 = 30도
   * 1분:  30/
   */
  switch (type) {
    case HOUR:
      // 1hour in 12h: 360deg/12h => 30deg
      const hour_ = hour - (hour > 12 ? 12 : 0);
      // 1minute in 1hour : 30deg/60m => 0.5deg
      return hour_ * 30 + minute * 0.5;
    case MINUTE:
      // 1minute in 1hour : 360deg/60m => 6deg
      // 1second in 1minute : 6deg/60s => 0.1deg
      return minute * 6 + second * 0.1;
    case SECOND:
      // 1second in 1minute : 360deg/60s => 6deg
      return second * 6;
    default:
      return 0;
  }
}
