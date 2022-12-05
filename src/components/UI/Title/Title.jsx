import styled from "styled-components";

const TitleStyled = styled.p`
  font-size: .875rem;
  line-height: 1rem;
  font-weight: 500;
  color: ${props => props.color};
`

export const Title = ({color, children}) => {

  return (
    <TitleStyled color={color}>{children}</TitleStyled>
  )
}
