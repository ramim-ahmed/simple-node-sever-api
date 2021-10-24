const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000

app.get('/', (req, res) => {
    res.status(200).send('my first Node Server Is Running....Ok!!! 200')
})

const users = [
      {
          id: 0,
          name: 'Ramim Ahmed',
          gender: 'Male',
          country: 'Bangladesh',
          Religion: 'Islam'
      },
      {
          id: 1,
          name: 'Raju Mia',
          gender: 'Male',
          country: 'Bangladesh',
          Religion: 'Islam'
      },
      {
          id: 3,
          name: 'Rimon Khan',
          gender: 'Male',
          country: 'Bangladesh',
          Religion: 'Islam'
      },
      {
          id: 4,
          name: 'Shawon chowdhury',
          gender: 'Male',
          country: 'Bangladesh',
          Religion: 'Islam'
      },
      {
          id: 5,
          name: 'Sumon Buya',
          gender: 'Male',
          country: 'Bangladesh',
          Religion: 'Islam'
      },
  ]

app.get('/users', (req, res) => {
    const search = req.query.search;
    console.log(search);
    if(search){
        const searchResult = users.filter( user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
   users.push(newUser);
   res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })