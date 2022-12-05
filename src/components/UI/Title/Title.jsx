import styled from "styled-components";

const TitleStyled = styled.p`
  font-size: .875rem;
  line-height: 1rem;
  font-weight: ${props => props.title};
  color: ${props => props.color};
`

export const Title = ({color, children, fontWeight}) => {

  return (
    <TitleStyled color={color} title={fontWeight}>{children}</TitleStyled>
  )
}
