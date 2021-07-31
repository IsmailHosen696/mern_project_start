require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 30001
const FriendModel = require('./services/models/Friends');
const cors = require('cors');

// mongoose connection
const connection = require('./services/db/db');
connection();

app.use(cors());
app.use(express.json());

app.get('/get', async (req, res) => {
    const data = await FriendModel.find();
    res.json(data)
})

app.post('/add', async (req, res) => {
    const { name, age, description } = req.body;
    const friend = new FriendModel({ name: name, age: age, description: description })
    await friend.save().then(result => res.json(result)).catch(e => res.end(e.message));
})

app.get('/edit/:id', async (req, res) => {
    const id = req.params.id
    const data = await FriendModel.findById(id);
    res.json(data)
})

app.patch('/patch/:id', async (req, res) => {
    const id = req.params.id
    const { name, age, description } = req.body;
    await FriendModel.findOneAndUpdate({ _id: id }, { name, age, description }).then(() => res.send(`${name} updated`))
})
app.delete('/del/:id', async (req, res) => {
    const id = req.params.id
    await FriendModel.findByIdAndDelete(id).then(() => res.send('friend deleted'));
})
app.listen(port, () => console.log(`server started`))