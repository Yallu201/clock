import { useState } from "react";
import Container from "./components/Container";
import Frame from "./components/Frame";
import NiddleHour from "./components/NiddleHour";
import NiddleMinute from "./components/NiddleMinute";
import NiddleSecond from "./components/NiddleSecond";
import useClock from "./hooks/useClock";
import { getAngle } from "./util";
const TYPE = { HOUR: 0, MINUTE: 1, SECOND: 2 };
function App() {
  const [myTime] = useClock();
  const [angle] = useState({
    hour: getAngle(myTime, TYPE.HOUR),
    minute: getAngle(myTime, TYPE.MINUTE),
    second: getAngle(myTime, TYPE.SECOND),
  });
  return (
    <Container>
      <Frame>
        <NiddleHour angle={angle.hour} />
        <NiddleMinute angle={angle.minute} />
        <NiddleSecond angle={angle.second} />
      </Frame>
    </Container>
  );
}
export default App;
