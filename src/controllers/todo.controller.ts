import { Response, Request } from "express";
import { ITodo } from "../types/todo.type";

import TodoSchema from "../models/todo.model";

export const getAllTodo = async (req: Request, res: Response) => {
	try {
		const allTasks: ITodo[] = await TodoSchema.find();
		res.status(200).json({ allTasks });
	} catch (err) {
		console.log(err);
		res.status(500).json('Internal server erro :(');
	}
};

export const createTodo = async (req: Request, res: Response) => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const todo: any = await TodoSchema.create(req.body);
		res.status(200).json({ message: "todo added", todo });
	} catch (err) {
		console.log(err);
		res.status(500).json('Internal server erro :(');
	}
};
