import { Router } from "express";
import { getAllTodo, createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo.controller";

export const taskRouter:Router = Router();

taskRouter.route('/').get(getAllTodo).patch(updateTodo).post(createTodo).delete(deleteTodo);
taskRouter.route('/:id').get(getTodo).patch(updateTodo).delete(deleteTodo);
