const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to the DB from the config folder
const connectDB = require('./Config/configDB');
connectDB();

app.use(express.json());

// All The Controllers
const userRouter = require('./Users/usersController');
const moivesRouter = require('./Movies/moviesController');
const membersRouter = require('./Members/membersController');
const subsRouter = require('./Subscriptions/subsController');

// All Routes endpoints
app.use('/users', userRouter);
app.use('/movies',moivesRouter);
app.use('/members',membersRouter)
app.use('/subs',subsRouter);

app.listen(3000, () => console.log(`Server is correctly running on : http://localhost:3000`))

// In the terminal enter : npm starts