import styled from "styled-components";

const TitleStyled = styled.p`
  font-size: .875rem;
  line-height: 1rem;
  font-weight: ${props => props.title};
  color: ${props => props.color};
`

export const Title = ({title, color, text}) => {

  return (
    <TitleStyled color={color} title={title}>{text}</TitleStyled>
  )
}
