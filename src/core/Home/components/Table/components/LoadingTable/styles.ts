import styled, { keyframes } from "styled-components";

const loadingCell = keyframes`
  0% {
    border: 1px solid grey;
  }

  100%{
    border: 1px solid white;
  }

`;

export const Loading = styled.div`
  width: 100%;
  height: 30px;
  animation: ${loadingCell} 1.5s ease infinite;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;

export const LoadingText = styled.div`
  margin-top: 50px;
`;
