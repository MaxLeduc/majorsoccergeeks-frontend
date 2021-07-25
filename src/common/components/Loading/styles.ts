import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.img`
  width: 85px;
  animation: ${rotate} 2s linear infinite;
  margin-bottom: 10px;
`

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  > p {
    text-align: center;
  }

  @media (max-width: 800px) {
    height: 70vh;
  }
`
