"use client";

import { useReducer, useRef } from "react";
import { useFirestore } from "@/context/FirestoreContext";
import { initialTaskState, taskReducer } from "../reducers/taskReducer";
import { MdAddTask, MdOutlineCancel } from "react-icons/md";

const AddTaskModal = () => {
  const { addDocument } = useFirestore();
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const modalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDocument("taskify", {
        task: state.task,
      });
      dispatch({ type: "RESET_FORM" });
      modalRef.current.close();
    } catch (error) {
      console.error(`Error saving new task: ${error}`);
    }
  };

  return (
    <dialog
      ref={modalRef}
      id="add_new_task"
      className="modal modal-button sm:modal-middle"
    >
      <div className="modal-box">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            type="text"
            value={state.task}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "task",
                value: e.target.value,
              })
            }
            placeholder="Enter new task"
            className="input input-bordered input-secondary w-full max-w-sm"
          />
          <button type="submit" className="btn btn-wide btn-success">
            <MdAddTask className="text-lg" />
            Add
          </button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-dash btn-error">
              <MdOutlineCancel className="text-lg" />
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddTaskModal;
