import { ITodo } from "../types/todo.type";
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema<ITodo>(
	{
		name : {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		status: {
			type: Boolean,
			default: false
		},
	},
	{
		timestamps: true
	}
);

export default model("Todo", todoSchema);

