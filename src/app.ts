import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import cors from "cors";
import { connectDB } from "./db/connect";


// init express
const app: Express = express();

// middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
	res.send('Hello World!');
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
