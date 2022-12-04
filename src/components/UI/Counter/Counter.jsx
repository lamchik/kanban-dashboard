import styled from "styled-components";

export const Counter = ({number}) => {

  const Counter = styled.div`
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

  return (
    <Counter>
      <Number>{number}</Number>
    </Counter>
  )
}
