import {useCallback, useState} from "react";
import styled from "styled-components";

import arrowDown from '../../../assets/images/dropdown-icon.svg'
import arrowUp from '../../../assets/images/dropup-icon.svg'

const DropDownStyled = styled.details`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .7rem .875rem .5rem 1.25rem;
  box-sizing: border-box;
  background-color: ${props => props.open ? '#E1E4E7' : '#F5F8FA'};
  border-radius: 50px;
  cursor: pointer;
`

const Summary = styled.summary`
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-content: center;
  font-size: .875rem;
  line-height: 1rem;
  color: #222222;
`

export const DropDown = ({summary, children}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <DropDownStyled onClick={handleClick} open={isOpen}>
      <Summary>
        <p>{summary}</p>
        <img src={isOpen ? arrowUp : arrowDown} alt='arrow'/>
      </Summary>
      {children}
    </DropDownStyled>
  )
}
