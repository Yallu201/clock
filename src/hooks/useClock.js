import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../modules/time";
const ONE_SECOND = 1000;
export default function useClock() {
  const dispatch = useDispatch();
  const initialTime = useSelector((_) => _.time);
  const [time] = useState(initialTime);
  useEffect(() => {
    setInterval(() => {
      dispatch(setTime(new Date()));
    }, ONE_SECOND);
  }, [dispatch]);
  return [time];
}
