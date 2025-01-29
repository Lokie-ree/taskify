"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { db } from "@/lib/firebase.config";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useFirestore } from "./FirestoreContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { user } = useAuth();
  const { deleteUserDocument } = useFirestore();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user) {
      const taskQuery = query(
        collection(db, "taskify"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "asc")
      );

      const unsubscribe = onSnapshot(
        taskQuery,
        (snapshot) => {
          const updatedTasks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTasks(updatedTasks);
        },
        (error) => {
          console.error(`Error fetching or updating tasks: ${error}`);
        }
      );

      return () => unsubscribe();
    } else {
      setTasks([]);
    }
  }, [user]);

  const getTasksById = (id) => {
    return tasks.find((task) => task.id === id);
  };

  const deleteTask = async (taskId) => {
    await deleteUserDocument("taskify", taskId);
  };

  return (
    <TaskContext.Provider value={{ tasks, getTasksById, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
