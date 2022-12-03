import {ReactComponent as SearchLogo} from "../../../assets/images/search.svg";
import styled from "styled-components";

export const Search = ({width, border, color, offset}) => {

  const SearchLine = styled.div`
    background: ${props => props.color};
    border-radius: ${props => props.border};
    padding: ${props => props.offset};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width};
  `

  const SearchLineInput = styled.input`
    width: 90%;
    background: inherit;
    border: none;
    color: #8C939F;
    ::placeholder {
      color: #8C939F;
      font-size: .875rem;
    }
    &:focus{outline:none;}
  `

  return (

    <SearchLine border={border} color={color} offset={offset} width={width}>
      <SearchLineInput
        type='text'
        placeholder='Search...'>
      </SearchLineInput>
      <SearchLogo/>
    </SearchLine>
  )
}
