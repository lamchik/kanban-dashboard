import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 7.4375rem;
  background: #0094FF;
  border-radius: 50px;
  padding: .75rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4375rem;
  border: none;
  cursor: pointer;
  transition: .2s linear;
  :hover {
    opacity: 0.8;
  }
`

export const Button = ({children}) => {

  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>

  )
}
