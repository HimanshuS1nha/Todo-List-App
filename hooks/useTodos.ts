import { SQLiteDatabase } from "expo-sqlite";
import { create } from "zustand";

type TodoType = {
  id: string;
  title: string;
  descrption: string;
  startDate: string;
  endDate: string;
  completed: boolean;
};

type UseTodosType = {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
  getTodos: (db: SQLiteDatabase) => Promise<boolean>;
};

export const useTodos = create<UseTodosType>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  getTodos: async (db) => {
    try {
      const todos = await db.getAllAsync<TodoType>(
        "SELECT * from todos ORDER BY id"
      );
      set({ todos });
      return true;
    } catch (error) {
      return false;
    }
  },
}));
