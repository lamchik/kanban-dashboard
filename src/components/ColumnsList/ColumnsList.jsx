import {useCallback, useState} from "react";
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styled from "styled-components";
import update from "immutability-helper";

import {columns} from "../../assets/mock/mock";
import {tasks as tasksMock} from "../../assets/mock/mock";
import {Column} from "../Column/Column";
import {TaskCard} from "../TaskCard/TaskCard";
import {Counter} from "../UI/Counter/Counter";
import {Title} from "../UI/Title/Title";

const ColumnsListStyled = styled.div`
  //width: 60.9vw;
  display: flex;
  justify-content: space-around;
  min-height: 47.5rem;
  padding-left: .625rem;
  box-sizing: border-box;
`

const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: ${props => props.slot};
  
  //border-right: 1px solid #F3F3F3;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding-top: 1.5625rem;
  padding-bottom: .8125rem;
  width: 100%;
  box-sizing: border-box;
`

export const ColumnsList = () => {

  const [tasks, setTaskStatus] = useState(tasksMock);

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find(task => task.id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      let newTasks = update(tasks, {
        [taskIndex]: { $set: task }
      });
      setTaskStatus(newTasks);
    },
    [tasks]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <ColumnsListStyled>
        {columns.map((column) =>
          <ColumnContainer>
            <TitleContainer>
              <Title color='#222222'>{column.title}</Title>
              <Counter number='7'/>
            </TitleContainer>
            <Column
              key={column.id}
              title={column.title}
              status={column.title}
              changeTaskStatus={changeTaskStatus}
            >
              {tasks
                .filter(item => item.status === column.title)
                .map(item => (
                  <TaskCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    time={item.time}
                    color={item.color}
                  />
                ))}
            </Column>
          </ColumnContainer>

        )}
      </ColumnsListStyled>
    </DndProvider>
  )

}
