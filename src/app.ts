import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	return console.log(`http://localhost:${port}`);
});