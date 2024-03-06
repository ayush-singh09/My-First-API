import express from 'express'
import cors from 'cors'

const app = express();
const port = 4000;

const data = [
    {
        id: 1,
        username: 'john_doe',
        email: 'john.doe@example.com',
        fullName: 'John Doe',
        age: 30,
        city: 'New York',
        country: 'USA'
    },
    {
        id: 2,
        username: 'jane_smith',
        email: 'jane.smith@example.com',
        fullName: 'Jane Smith',
        age: 25,
        city: 'Los Angeles',
        country: 'USA'
    },
    {
        id: 3,
        username: 'alex_jones',
        email: 'alex.jones@example.com',
        fullName: 'Alex Jones',
        age: 35,
        city: 'London',
        country: 'UK'
    },
    {
        id: 4,
        username: 'emily_brown',
        email: 'emily.brown@example.com',
        fullName: 'Emily Brown',
        age: 28,
        city: 'Sydney',
        country: 'Australia'
    },
    {
        id: 5,
        username: 'michael_wang',
        email: 'michael.wang@example.com',
        fullName: 'Michael Wang',
        age: 32,
        city: 'Toronto',
        country: 'Canada'
    }
];

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello from Home</h1>');
    console.log(req);
})

app.get('/data', (req, res) => {
    res.send(data);
})


app.listen(port, () => console.log("Server is running on Port: " + port));