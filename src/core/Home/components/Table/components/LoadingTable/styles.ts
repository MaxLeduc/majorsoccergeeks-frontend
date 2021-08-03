import styled, { keyframes } from "styled-components";

const loadingCell = keyframes`
  0% {
    background-position: 0% 0%;
  }
  
  50%{
    background-position: 100% 0%;
  }

  100%{
    background-position: 0% 0%;
  }

`;

export const Loading = styled.div`
  width: 100%;
  height: 30px;
  background: linear-gradient(270deg, #fff, #777);
  animation: ${loadingCell} 1s ease infinite;
  background-size: 500% 100%;
`;
