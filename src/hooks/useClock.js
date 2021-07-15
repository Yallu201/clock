import { useState, useEffect } from "react";
const ONE_SECOND = 1000;
export default function useClock() {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, ONE_SECOND);
  }, []);
  return [clock];
}
