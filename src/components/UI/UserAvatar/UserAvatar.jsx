import avatar from "../../../assets/images/user-avatar.png";
import styled from "styled-components";

export const UserAvatar = ({width, height}) => {

  const StyledAvatar = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
  `

  return (
    <StyledAvatar src={avatar} alt='avatar' width={width} height={height}/>
  )
}
