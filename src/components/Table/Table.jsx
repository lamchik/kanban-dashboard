import styled from "styled-components";

import {Title} from "../UI/Title/Title";
import {ColumnsList} from "../ColumnsList/ColumnsList";
import plus from '../../assets/images/plus-grey.svg'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: baseline;
`

const ButtonContainer = styled.div`
  width: 100%;
  padding: 1.5625rem 0 1.02rem 2.25rem;
  border-bottom: 1px solid #F3F3F3;
  border-left: 1px solid #F3F3F3;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  border: none;
  background-color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  transition: .2s linear;
  :hover {
    opacity: 0.7;
  }
`

const AddIcon = styled.img`
  margin-right: 0.25rem;
`

export const Table = () => {

  return (
    <Container>

      <ColumnsList/>

      <ButtonContainer>
        <Button slot='2.25rem'>
          <AddIcon src={plus} alt='plus-icon'/>
          <Title color='#8C939F' fontWeight='400'>Create status</Title>
        </Button>
      </ButtonContainer>


    </Container>

  )
}
