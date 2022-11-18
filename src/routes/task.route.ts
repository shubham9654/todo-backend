import { Router } from "express";
import { getAllTodo, createTodo } from "../controllers/todo.controller";

export const taskRouter:Router = Router();

taskRouter.route('/').get(getAllTodo);
taskRouter.route('/').post(createTodo);
