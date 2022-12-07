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
    if(id === '08'){
        res.send(courses)
    }
    else{
        const totalCategory = courses.filter( c => c.category_id === id);
        res.send(totalCategory);
    }
})

app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courses.find( course => course._id === id)
    res.send(selectedCourse);
})

app.listen(port, () =>{
    console.log('Server is running on', port)
})

