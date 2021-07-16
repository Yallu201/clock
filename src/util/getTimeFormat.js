export default function getTimeFormat(time) {
  const prefix = time.hour >= 12 ? "오후" : "오전";
  const hour = `${time.hour - (time.hour > 12 ? 12 : 0)}`;
  const minute = time.minute < 10 ? `0${time.minute}` : `${time.minute}`;
  const second = time.second < 10 ? `0${time.second}` : `${time.second}`;
  return `${prefix} ${hour}:${minute}:${second}`;
}
