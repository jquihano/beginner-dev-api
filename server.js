const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 1337;

app.use(cors());

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port: ${PORT}`)
})