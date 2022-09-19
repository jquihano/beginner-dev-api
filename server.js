const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1337;

app.use(cors());

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:tag', (req, res)=> {
    console.log(req.params.tag)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port: ${PORT}`)
})