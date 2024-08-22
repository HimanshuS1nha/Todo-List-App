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
};

export const useTodos = create<UseTodosType>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
}));
