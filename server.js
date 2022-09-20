const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1337;

app.use(cors());


const resources = {
    'the odin project': {
        'name': 'The Odin Project',
        'url': 'theodinproject.com',
        'description': 'The Odin Project provides a free open source coding curriculum that can be taken entirely online. It has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects.',
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
        'keywords': ['web development', 'javascript', 'html', 'css'],
        'price': 'free',
    },
    'unknown': {
        'name': 'unknown'
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:keywords', (req, res)=> {
    const resource = req.params.keywords;
    if(resources[resource]){
        res.json(resources[resource])
    } else {
        res.json(resources['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port: ${PORT}`)
})