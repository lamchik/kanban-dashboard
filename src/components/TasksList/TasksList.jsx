import {tasks} from "../../assets/mock/mock";
import {TaskCard} from "../TaskCard/TaskCard";

export const TasksList = () => {

  return (
    tasks.map((task) =>
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        time={task.time}
        color={task.color}
      />
    )
  )
}
