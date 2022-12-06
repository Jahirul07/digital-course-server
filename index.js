const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')


app.use(cors());

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) =>{
    res.send('Api is Running');
})

app.get('/course-categories', (req, res) =>{
    res.send(categories);
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const totalCategory = course.filter( c => c.category_id === id);
    req.send(totalCategory);
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selecredCourse = courses.find( course => course._id === id)
    res.send(selecredCourse);
})

app.listen(port, () =>{
    console.log('Server is running on', port)
})

