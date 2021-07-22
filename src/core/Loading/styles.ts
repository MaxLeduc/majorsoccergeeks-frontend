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
  width: 100px;
  animation: ${rotate} 2s linear infinite;
  margin-bottom: 10px;
`

export const IconWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    text-align: center;
  }
`