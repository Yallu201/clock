export default function getTimeFormat(date) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour}:${minute}:${second < 10 ? "0" + second : second}`;
}
