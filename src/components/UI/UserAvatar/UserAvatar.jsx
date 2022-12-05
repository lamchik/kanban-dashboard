import styled from "styled-components";

import avatar from "../../../assets/images/user-avatar.png";

const StyledAvatar = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`

export const UserAvatar = ({width, height}) => {

  return (
    <StyledAvatar src={avatar} alt='avatar' width={width} height={height}/>
  )
}
