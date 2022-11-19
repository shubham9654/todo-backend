import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import cors from "cors";
import { connectDB } from "./db/connect";

import  { taskRouter } from './routes/task.route';

// init express
const app: Express = express();

// middleware
app.use(express.json());
app.use(cors());


app.use('/api/v1/todo', taskRouter);
app.use('/api/v1/', (req,res) => {
	res.send('Hello world..');
});

const port: string | number = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_DB_URI);
		app.listen(port, () => console.log(`listening to 3000 port ...`));
	} catch (err) {
		console.log(err);
	}
};

start();
