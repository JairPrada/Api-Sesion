const express = require('express');
const app = express();
const connectDB = require('./src/config/db.config');
const PORT = process.env.PORT || 4000;
const userRouter = require('./src/routes/user.routes');

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("<h1>Bienvenido</h1>")
});
app.use('/user', userRouter);
app.listen(PORT, () => {
    console.log("Server listening on port :" + PORT);
})