import {useCallback, useEffect, useState} from "react";
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 47.5rem;
  padding-left: .625rem;
  box-sizing: border-box;
`

const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: ${props => props.slot};
  min-width: 15rem;
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
  const [tasksCount, setTasksCount] = useState(0)

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

  useEffect(() => {
    columns.forEach(item => {
      let tasks = tasksMock.filter(task => task.status === item.title)
      setTasksCount(tasks.length)
    })
  }, [tasksCount])


  return (
    <DndProvider backend={HTML5Backend}>
      <ColumnsListStyled>
        {columns.map((column) =>
          <ColumnContainer key={column.id}>
            <TitleContainer>
              <Title color='#222222' fontWeight='500'>{column.title}</Title>
              <Counter>{tasks
                .filter(item => item.status === column.title).length}</Counter>
            </TitleContainer>
            <Column
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
                    isCompleted={item.status === 'Completed'}
                  />
                ))}
            </Column>
          </ColumnContainer>
        )}
      </ColumnsListStyled>
    </DndProvider>
  )

}
