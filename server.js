const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1337;

app.use(cors());


const resources = {
    'the odin project': {
        'name': 'The Odin Project',
        'url': 'theodinproject.com',
        'description': 'The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.',
        'keywords': ['web development', 'javascript', 'html', 'css', 'ruby on rails'],
        'price': 'free',
    },
    'freecode camp': {
        'name': 'Freecode Camp',
        'url': 'freecodecamp.com',
        'description': 'freeCodeCamp is a community of millions of people around the world who are learning to code together. You can learn to code with free online courses, programming projects, and interview preparation for developer jobs.',
        'keywords': ['web development', 'javascript', 'html', 'css', 'ruby on rails', 'python', 'sql'],
        'price': 'free',
    },
    'fullstack open': {
        'name': 'Fullstack Open',
        'url': 'fullstackopen.com',
        'description': 'Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.',
        'keywords': ['web development', 'javascript', 'html', 'css', 'redux', 'nodejs', 'react'],
        'price': 'free',
    },
    '100devs': {
        'name': '100Devs',
        'url': 'leonnoel.com',
        'description': 'An online, free, 30 week bootcamp, meant to bring you from zero programming skills to employable taught by Leon Noel. Focusing on learning and building frontend and backend applications.',
        'keywords': ['web development', 'javascript', 'html', 'css', 'cybe'],
        'price': 'free',
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:keywords', (req, res)=> {
    console.log(req.params.tag)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port: ${PORT}`)
})