import {useCallback, useState} from "react";
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styled from "styled-components";
import update from "immutability-helper";

import {columns} from "../../assets/mock/mock";
import {tasks as tasksMock} from "../../assets/mock/mock";
import {Column} from "../Column/Column";
import {TaskCard} from "../TaskCard/TaskCard";

const TableStyled = styled.div`
  width: 60.9vw;
  display: flex;
  justify-content: space-around;
  min-height: 47.5rem;
  padding-left: .625rem;
  box-sizing: border-box;
`
export const Table = () => {

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
      <TableStyled>
        {columns.map((column) =>
          <Column
            key={column.id}
            title={column.title}
            status={column.title}
            changeTaskStatus={changeTaskStatus}
          >
            {tasks
              .filter(item => item.status === column.title)
              .map(item => (
                <TaskCard key={item.id} id={item.id} title={item.title} time={item.time} color={item.color}/>
              ))}
          </Column>
        )}
      </TableStyled>
    </DndProvider>
  )

}
