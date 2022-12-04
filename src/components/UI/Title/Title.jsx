import styled from "styled-components";

export const Title = ({title, color, text}) => {

  const Title = styled.p`
    font-size: .875rem;
    line-height: 1rem;
    font-weight: ${props => props.title};
    color: ${props => props.color};
  `

  return (
    <Title color={color} title={title}>{text}</Title>
  )
}
