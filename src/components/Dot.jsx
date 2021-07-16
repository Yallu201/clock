import styled from "@emotion/styled";
import React from "react";

const Dot = ({ n }) => {
  return <Stick n={n} />;
};
const Stick = styled.div`
  position: absolute;
  top: 248px;
  left: 235px;
  width: 30px;
  height: 4px;
  background: black;
  border-radius: 10px;
  transform: ${({ n }) => `rotate(${n * 30}deg)`} translate(235px);
`;
export default Dot;
