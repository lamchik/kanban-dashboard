import styled from "styled-components";

import {Title} from "../UI/Title/Title";
import {Counter} from "../UI/Counter/Counter";
import plus from '../../assets/images/plus-grey.svg'

const MainContainer = styled.div`
  display: flex;
`
const TableHeaderContainer = styled.div`
  width: 60.9vw;
  padding: 1.5625rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #F3F3F3;
  border-right: 1px solid #F3F3F3;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding-left: ${props => props.slot};
  border-bottom: 1px solid #F3F3F3;
`

const AddIcon = styled.img`
  margin-right: 0.25rem;
`
export const TableHeader = () => {

  return (
    <MainContainer>

      <TableHeaderContainer>
        <TitleContainer slot='0'>
          <Title text='New Task' color='#222222' title='500'/>
          <Counter number='4'/>
        </TitleContainer>

        <TitleContainer slot='0'>
          <Title text='Scheduled' color='#222222' title='500'/>
          <Counter number='3'/>
        </TitleContainer>

        <TitleContainer slot='0'>
          <Title text='In progress' color='#222222' title='500'/>
          <Counter number='3'/>
        </TitleContainer>

        <TitleContainer slot='0'>
          <Title text='Completed' color='#222222' title='500'/>
          <Counter number='5'/>
        </TitleContainer>
      </TableHeaderContainer>

      <TitleContainer slot='2.25rem'>
        <AddIcon src={plus} alt='plus-icon'/>
        <Title text='Create status' color='#8C939F' title='400'/>
      </TitleContainer>

    </MainContainer>


  )
}
