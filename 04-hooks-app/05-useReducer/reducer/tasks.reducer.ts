import * as z from "zod";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TaskState {
  todos: Todo[];
  completed: number;
  pending: number;
  length: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

const emptyState: TaskState = {
  todos: [],
  completed: 0,
  pending: 0,
  length: 0,
};

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");

  // Si no hay nada en localStorage, regresa estado vacío
  if (localStorageState === null) return emptyState;

  // Parse seguro (por si está corrupto)
  let parsed: unknown;
  try {
    parsed = JSON.parse(localStorageState);
  } catch {
    return emptyState;
  }

  // Validar con Zod
  const result = TaskStateSchema.safeParse(parsed);

  if (!result.success) {
    console.log(result.error);
    return emptyState;
  }

  // Seguro: ya está validado
  return result.data;
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      const todos = [...state.todos, newTodo];
      const completed = todos.filter((t) => t.completed).length;
      const pending = todos.length - completed;

      return { todos, length: todos.length, completed, pending };
    }

    case "DELETE_TODO": {
      const todos = state.todos.filter((todo) => todo.id !== action.payload);
      const completed = todos.filter((t) => t.completed).length;
      const pending = todos.length - completed;

      return { todos, length: todos.length, completed, pending };
    }

    case "TOGGLE_TODO": {
      const todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      const completed = todos.filter((t) => t.completed).length;
      const pending = todos.length - completed;

      return { todos, length: todos.length, completed, pending };
    }

    default:
      return state;
  }
};
