import { useTask } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, setEditData, editData } = useTask();

  const handleClickEdit = () => {
    setEditData(task);
  };

  return (
      <div className="bg-gray-800 text-white p-4 sm:p-8 rounded-md flex justify-between items-center my-4 flex-wrap gap-5 sm:gap-10 max-w-4xl mx-auto">
        <div className="space-y-4 flex-1 w-52 max-w-xl">
          <h1 className="text-lg sm:text-2xl font-bold break-words">
            {task?.title}
          </h1>
          <p className="text-gray-500 text-base sm:text-lg break-words">
            {task?.description}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-lime-700 px-3 py-2 rounded-md hover:bg-lime-900"
            onClick={handleClickEdit}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="bg-red-500 px-3 py-2 rounded-md hover:bg-red-800"
            onClick={() => {
              setEditData(null);
              console.log(editData);
              deleteTask(task?._id);
            }}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
  );
}

export default TaskCard;
