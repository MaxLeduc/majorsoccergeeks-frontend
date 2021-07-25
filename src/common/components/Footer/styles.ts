import styled from 'styled-components'

export const ExternalWrapper = styled.div`
  padding: 14px;
  background: #3f51b5;
  font-size: 13px;
`
  
export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 90%;
  margin: 0 auto;
`

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-right: 10px;
  }
`

export const TwitterLink = styled.a`
  > img {
    width: 20px;
  }
`

export const MobileBottomNavOffset = styled.div`
  @media (max-width: 800px) {
  height: 60px;
  }
`
