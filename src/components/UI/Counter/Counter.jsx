import styled from "styled-components";

const CounterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .125rem .5625rem;
  gap: 10px;
  background: #E8EBEF;
  border-radius: 100px;
`

const Number = styled.p`
  font-size: .875rem;
  line-height: 1rem;
  text-align: center;
  color: #8C939F;
`

export const Counter = ({number}) => {

  return (
    <CounterStyled>
      <Number>{number}</Number>
    </CounterStyled>
  )
}
