import styled from "styled-components";
import {ReactComponent as BordioLogo} from "../../../assets/images/bordio-logo.svg";
import {ReactComponent as SearchLogo} from "../../../assets/images/search.svg"

export const SideBarHeader = () => {

  const StylesWrapper = styled.div`
    background-color: #0F1D40;
    padding: 1.625rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  `

  const SearchLine = styled.div`
    width: 100%;
    height: 2rem;
    background: #2D4071;
    border-radius: 4px;
    margin-top: 1.625rem;
    padding: .56rem .625rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const SearchLineInput = styled.input`
    background: #2D4071;
    width: 100%;
    border: none;
    color: #8C939F;
    ::placeholder {
      color: #8C939F;
      font-size: .875rem;
    }
    &:focus{outline:none;}
  `

  return (
    <StylesWrapper>
        <BordioLogo/>
        <SearchLine>
          <SearchLineInput type='text' placeholder='Search...'></SearchLineInput>
          <SearchLogo/>
        </SearchLine>

    </StylesWrapper>
  )
}
