import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import { useForm } from "react-hook-form";

function TaskForm() {
  const { createTask, editData, updateTask, setEditData, tasks } = useTask();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (editData !== null) {
      setValue("title", editData.title);
      setValue("description", editData.description);
    }
  }, [editData]);

  useEffect(() => {
    setValue("title", "");
    setValue("description", "");
  }, [tasks]);

  const onSubmit = handleSubmit((values) => {
    console.log(values);
    console.log(editData);
    if (editData) {
      updateTask(editData._id, values);
      setEditData(null);
    } else {
      createTask(values);
    }
    setValue("title", "");
    setValue("description", "");
  });

  return (
    <div className="max-w-xl mx-auto ">
      <form onSubmit={onSubmit} className="sm:p-8 mb-4">
        <h1 className="text-lg sm:text-2xl font-bold text-white mb-3">
          Create New Task
        </h1>
        <input
          autoFocus
          placeholder="Title"
          className="p-3 w-full mb-2 bg-slate-300 rounded-md"
          {...register("title", { required: true })}
        />
        <textarea
          placeholder="Describe your task"
          className="p-3 w-full mb-2 bg-slate-300 rounded-md h-36"
          {...register("description", { required: true })}
        ></textarea>
        <button className="bg-blue-600 px-3 py-2 text-white rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
