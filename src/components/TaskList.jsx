import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Spinner from "./Spinner";

import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks, getTasks, loading } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  const [parent] = useAutoAnimate();

  return (
    <>
      {tasks?.length > 0 ? (
        <div className="mx-auto" ref={parent}>
          {tasks?.map((task) => (
            <TaskCard key={task?._id} task={task} />
          ))}
        </div>
      ) : loading ? (
        <Spinner></Spinner>
      ) : (
        <h1 className="text-white text-xl sm:text-4xl font-bold text-center">
          You don't have tasks
        </h1>
      )}
    </>
  );
}

export default TaskList;
