import React from "react";
import styled from "@emotion/styled";
const NiddleHour = ({ angle }) => {
  return (
    <Area angle={angle}>
      <Top>
        <Line />
      </Top>
      <Bottom />
    </Area>
  );
};
const Area = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border-radius: 100%;
  @media (prefers-reduced-motion: no-preference) {
    animation: niddle-spin-hour infinite ${12 * 60 * 60}s linear;
  }
  @keyframes niddle-spin-hour {
    from {
      transform: ${({ angle }) => `rotate(${angle}deg)`};
    }
    to {
      transform: ${({ angle }) => `rotate(${angle + 360}deg)`};
    }
  }
`;
const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
`;
const Bottom = styled.div`
  flex: 1;
  background-color: transparent;
`;
const Line = styled.div`
  width: 6px;
  height: 50%;
  background-color: black;
`;
export default React.memo(NiddleHour);
