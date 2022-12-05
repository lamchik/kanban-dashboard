import styled from "styled-components";

const NotificationsStyled = styled.div`
  padding: .2rem 0.16rem;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  bottom: 50%;
  background: #F21247;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
`

const NotificationsCounter = styled.p`
  font-size: .625rem;
  color: #ffffff;
  text-align: center;
`
export const Notifications = ({notifications}) =>{
  const counter = +notifications > 99 ? '99+' : notifications.toString()

  return (
    <NotificationsStyled>
      <NotificationsCounter>{counter}</NotificationsCounter>
    </NotificationsStyled>
  )
}
