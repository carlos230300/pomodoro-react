import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, MainForm
  secondsRemaining: number; // CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; // 1 a 8 // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  }
}