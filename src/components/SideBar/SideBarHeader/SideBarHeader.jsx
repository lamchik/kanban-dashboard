import styled from "styled-components";
import {Search} from "../../UI/Search/Search";
import {ReactComponent as BordioLogo} from "../../../assets/images/bordio-logo.svg";

export const SideBarHeader = () => {

  const StylesWrapper = styled.div`
    background-color: #0F1D40;
    padding: 1.625rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
  `

  return (
    <StylesWrapper>
        <BordioLogo/>
        <Search width='100%' border="4px" color='#2D4071' offset='.46rem .6rem'/>
    </StylesWrapper>
  )
}
