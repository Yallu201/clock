import React from "react";
import styled from "@emotion/styled";

const Container = ({ children }) => {
  return (
    <Wrap>
      <Content>{children}</Content>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default Container;
