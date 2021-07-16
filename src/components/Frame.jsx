import React from "react";
import styled from "@emotion/styled";
import Dot from "./Dot";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTimeFormat } from "../util";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Frame = ({ children }) => {
  const myTime = useSelector((_) => _.time);
  const frameElement = useRef(null);
  const tooltipElement = useRef(null);
  useEffect(() => {
    if (!frameElement || !tooltipElement) return;
    frameElement.current.addEventListener("mousemove", (e) => {
      tooltipElement.current.style.left = `${e.pageX}px`;
      tooltipElement.current.style.top = `${e.pageY - 40}px`;
    });
  }, [frameElement, tooltipElement]);
  return (
    <Wrap ref={frameElement}>
      <CenterDot />
      {numbers.map((n) => (
        <Dot key={n} n={n} />
      ))}
      {children}
      <ToolTip ref={tooltipElement} className="tooltip">
        {getTimeFormat(myTime)}
      </ToolTip>
    </Wrap>
  );
};
const Wrap = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  border-radius: 500px;
  border: 0.5rem solid #452821;
  background-color: #fff8eb;
  &:hover .tooltip {
    display: block;
  }
`;
const ToolTip = styled.div`
  display: none;
  position: fixed;
  border: 1px solid black;
  background-color: white;
  padding: 0.25rem;
  font-size: 1.25rem;
`;
const CenterDot = styled.div`
  position: absolute;
  top: 245px;
  left: 245px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: black;
`;
export default Frame;
