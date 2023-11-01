import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function TaskPage() {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-zinc-900 h-max">
        <div className="container mx-auto p-4">
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default TaskPage;
