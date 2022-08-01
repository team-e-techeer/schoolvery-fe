import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');
export function useTimer() {
  const [time, setTime] = useState(dayjs());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(dayjs());
    }, 1000 * 10);
    return () => clearInterval(id);
  }, []);

  return time;
}
