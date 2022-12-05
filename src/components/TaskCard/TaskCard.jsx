import styled from "styled-components";
import {useDrag} from "react-dnd";

const CardStyled = styled.div`
  width: 100%;
  background: ${props => props.color};
  border-radius: 8px;
  padding: .9375rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: .625rem;
  opacity: ${props => props.opacity};
  cursor: grab;
`

const CardStyledCompleted = styled(CardStyled)`
  background-color: #F0F0F0;
`

const Title = styled.p`
    font-weight: 400;
    font-size: .875rem;
    line-height: 1rem;
    color: #222222;
    margin-bottom: 2px;
`

const TitleCompleted = styled(Title)`
  color: #A5A5A5;
  text-decoration: line-through;
`

const Time = styled.p`
    font-weight: 400;
    font-size: .8125rem;
    line-height: .9375rem;
    color: #435E52;
`

const TimeCompleted = styled(Time)`
  color: #A5A5A5;
`

export const TaskCard = ({color, title, time, id, isCompleted}) => {

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: () => ({id}),
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const Card = isCompleted ?
    <CardStyledCompleted color={color} opacity={isDragging ? 0.4 : 1} ref={dragRef} >
      <TitleCompleted>{title}</TitleCompleted>
      <TimeCompleted>{time}</TimeCompleted>
    </CardStyledCompleted>
    :
    <CardStyled color={color} opacity={isDragging ? 0.4 : 1} ref={dragRef} >
      <Title>{title}</Title>
      <Time>{time}</Time>
    </CardStyled>


  return Card
}
