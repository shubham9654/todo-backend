import { Response, Request } from "express";
import { ITodo } from "../types/todo.type";

import TodoSchema from "../models/todo.model";

export const getTodo = async (req: Request, res: Response) => {
	try {
		const todoId = req.body.id || req.params.id;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const todo: any = await TodoSchema.findById(todoId);
		if (!todo) {
			return res.status(404).json({ errMsg: 'no task found!' });
		}
		res.status(200).json({ message: "success", todo });
	} catch (err) {
		console.log(err);
		res.status(500).json('Internal server error :(');
	}
};

export const getAllTodo = async (req: Request, res: Response) => {
	try {
		const allTodo: ITodo[] = await TodoSchema.find();
		res.status(200).json({ message: "success", allTodo });
	} catch (err) {
		console.log(err);
		res.status(500).json('Internal server error :(');
	}
};

export const createTodo = async (req: Request, res: Response) => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const todo: any = await TodoSchema.create(req.body);
		res.status(200).json({ message: "todo added", todo });
	} catch (err) {
		console.log(err);
		res.status(500).json('Internal server error :(');
	}
};

export const updateTodo = async (req: Request, res: Response) => {
	try {
		const todoId = req.body.id || req.params.id;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const todo: any = await TodoSchema.findByIdAndUpdate(todoId, req.body, { new: true, runValidators: true });
		if (!todo) {
			return res.status(404).json({ errMsg: 'no task found!' });
		}
		res.status(200).json({ message: "todo updated", todo });
	} catch (err) {
		console.log(err);
		res.status(500).json('Internal server error :(');
	}
};

export const deleteTodo = async (req: Request, res: Response) => {
	try {
		const todoId = req.body.id || req.params.id;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const todo: any = await TodoSchema.findByIdAndRemove(todoId);
		if (!todo) {
			return res.status(404).json({ errMsg: 'no task found!' });
		}
		res.status(200).json({ message: "todo deleted", todo });
	} catch (err) {
		console.log(err);
		res.status(500).json('Internal server error :(');
	}
};
