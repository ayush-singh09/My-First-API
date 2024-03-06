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
  },
  {
    id: 6,
    username: 'sarah_carter',
    email: 'sarah.carter@example.com',
    fullName: 'Sarah Carter',
    age: 27,
    city: 'Berlin',
    country: 'Germany'
  },
  {
    id: 7,
    username: 'adam_smith',
    email: 'adam.smith@example.com',
    fullName: 'Adam Smith',
    age: 33,
    city: 'Paris',
    country: 'France'
  },
  {
    id: 8,
    username: 'olivia_harris',
    email: 'olivia.harris@example.com',
    fullName: 'Olivia Harris',
    age: 29,
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    id: 9,
    username: 'charlie_taylor',
    email: 'charlie.taylor@example.com',
    fullName: 'Charlie Taylor',
    age: 31,
    city: 'Rome',
    country: 'Italy'
  },
  {
    id: 10,
    username: 'ava_martin',
    email: 'ava.martin@example.com',
    fullName: 'Ava Martin',
    age: 26,
    city: 'Moscow',
    country: 'Russia'
  },
  {
    id: 11,
    username: 'ethan_clark',
    email: 'ethan.clark@example.com',
    fullName: 'Ethan Clark',
    age: 34,
    city: 'Madrid',
    country: 'Spain'
  },
  {
    id: 12,
    username: 'lily_rodriguez',
    email: 'lily.rodriguez@example.com',
    fullName: 'Lily Rodriguez',
    age: 28,
    city: 'Oslo',
    country: 'Norway'
  },
  {
    id: 13,
    username: 'william_wilson',
    email: 'william.wilson@example.com',
    fullName: 'William Wilson',
    age: 30,
    city: 'Stockholm',
    country: 'Sweden'
  },
  {
    id: 14,
    username: 'mia_garcia',
    email: 'mia.garcia@example.com',
    fullName: 'Mia Garcia',
    age: 29,
    city: 'Athens',
    country: 'Greece'
  },
  {
    id: 15,
    username: 'jacob_martinez',
    email: 'jacob.martinez@example.com',
    fullName: 'Jacob Martinez',
    age: 32,
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    id: 16,
    username: 'sophia_anderson',
    email: 'sophia.anderson@example.com',
    fullName: 'Sophia Anderson',
    age: 27,
    city: 'Vienna',
    country: 'Austria'
  },
  {
    id: 17,
    username: 'logan_gonzalez',
    email: 'logan.gonzalez@example.com',
    fullName: 'Logan Gonzalez',
    age: 33,
    city: 'Copenhagen',
    country: 'Denmark'
  },
  {
    id: 18,
    username: 'harper_miller',
    email: 'harper.miller@example.com',
    fullName: 'Harper Miller',
    age: 28,
    city: 'Dublin',
    country: 'Ireland'
  },
  {
    id: 19,
    username: 'benjamin_baker',
    email: 'benjamin.baker@example.com',
    fullName: 'Benjamin Baker',
    age: 31,
    city: 'Helsinki',
    country: 'Finland'
  },
  {
    id: 20,
    username: 'ava_kelly',
    email: 'ava.kelly@example.com',
    fullName: 'Ava Kelly',
    age: 26,
    city: 'Brussels',
    country: 'Belgium'
  },
  // Additional 30 users
  {
    id: 21,
    username: 'oliver_jackson',
    email: 'oliver.jackson@example.com',
    fullName: 'Oliver Jackson',
    age: 35,
    city: 'Seoul',
    country: 'South Korea'
  },
  {
    id: 22,
    username: 'chloe_richardson',
    email: 'chloe.richardson@example.com',
    fullName: 'Chloe Richardson',
    age: 29,
    city: 'Bangkok',
    country: 'Thailand'
  },
  {
    id: 23,
    username: 'lucas_taylor',
    email: 'lucas.taylor@example.com',
    fullName: 'Lucas Taylor',
    age: 33,
    city: 'Berlin',
    country: 'Germany'
  },
  {
    id: 24,
    username: 'ava_thompson',
    email: 'ava.thompson@example.com',
    fullName: 'Ava Thompson',
    age: 26,
    city: 'Paris',
    country: 'France'
  },
  {
    id: 25,
    username: 'mia_robinson',
    email: 'mia.robinson@example.com',
    fullName: 'Mia Robinson',
    age: 30,
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    id: 26,
    username: 'william_hill',
    email: 'william.hill@example.com',
    fullName: 'William Hill',
    age: 28,
    city: 'Rome',
    country: 'Italy'
  },
  {
    id: 27,
    username: 'emily_lewis',
    email: 'emily.lewis@example.com',
    fullName: 'Emily Lewis',
    age: 32,
    city: 'Moscow',
    country: 'Russia'
  },
  {
    id: 28,
    username: 'james_young',
    email: 'james.young@example.com',
    fullName: 'James Young',
    age: 27,
    city: 'Madrid',
    country: 'Spain'
  },
  {
    id: 29,
    username: 'emma_hall',
    email: 'emma.hall@example.com',
    fullName: 'Emma Hall',
    age: 31,
    city: 'Oslo',
    country: 'Norway'
  },
  {
    id: 30,
    username: 'noah_allen',
    email: 'noah.allen@example.com',
    fullName: 'Noah Allen',
    age: 28,
    city: 'Stockholm',
    country: 'Sweden'
  },
  {
    id: 31,
    username: 'ava_nelson',
    email: 'ava.nelson@example.com',
    fullName: 'Ava Nelson',
    age: 34,
    city: 'Athens',
    country: 'Greece'
  },
  {
    id: 32,
    username: 'olivia_carter',
    email: 'olivia.carter@example.com',
    fullName: 'Olivia Carter',
    age: 29,
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    id: 33,
    username: 'liam_harris',
    email: 'liam.harris@example.com',
    fullName: 'Liam Harris',
    age: 33,
    city: 'Vienna',
    country: 'Austria'
  },
  {
    id: 34,
    username: 'ava_king',
    email: 'ava.king@example.com',
    fullName: 'Ava King',
    age: 28,
    city: 'Copenhagen',
    country: 'Denmark'
  },
  {
    id: 35,
    username: 'emma_ross',
    email: 'emma.ross@example.com',
    fullName: 'Emma Ross',
    age: 31,
    city: 'Dublin',
    country: 'Ireland'
  },
  {
    id: 36,
    username: 'ethan_knight',
    email: 'ethan.knight@example.com',
    fullName: 'Ethan Knight',
    age: 26,
    city: 'Helsinki',
    country: 'Finland'
  },
  {
    id: 37,
    username: 'mia_cooper',
    email: 'mia.cooper@example.com',
    fullName: 'Mia Cooper',
    age: 30,
    city: 'Brussels',
    country: 'Belgium'
  },
  {
    id: 38,
    username: 'lucas_kelly',
    email: 'lucas.kelly@example.com',
    fullName: 'Lucas Kelly',
    age: 27,
    city: 'Seoul',
    country: 'South Korea'
  },
  {
    id: 39,
    username: 'amelia_perez',
    email: 'amelia.perez@example.com',
    fullName: 'Amelia Perez',
    age: 33,
    city: 'Bangkok',
    country: 'Thailand'
  },
  {
    id: 40,
    username: 'mason_gomez',
    email: 'mason.gomez@example.com',
    fullName: 'Mason Gomez',
    age: 28,
    city: 'Berlin',
    country: 'Germany'
  },
  {
    id: 41,
    username: 'harper_edwards',
    email: 'harper.edwards@example.com',
    fullName: 'Harper Edwards',
    age: 32,
    city: 'Paris',
    country: 'France'
  },
  {
    id: 42,
    username: 'charlotte_bell',
    email: 'charlotte.bell@example.com',
    fullName: 'Charlotte Bell',
    age: 27,
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    id: 43,
    username: 'liam_adams',
    email: 'liam.adams@example.com',
    fullName: 'Liam Adams',
    age: 31,
    city: 'Rome',
    country: 'Italy'
  },
  {
    id: 44,
    username: 'ava_garcia',
    email: 'ava.garcia@example.com',
    fullName: 'Ava Garcia',
    age: 29,
    city: 'Moscow',
    country: 'Russia'
  },
  {
    id: 45,
    username: 'emma_thomas',
    email: 'emma.thomas@example.com',
    fullName: 'Emma Thomas',
    age: 34,
    city: 'Madrid',
    country: 'Spain'
  },
  {
    id: 46,
    username: 'william_scott',
    email: 'william.scott@example.com',
    fullName: 'William Scott',
    age: 28,
    city: 'Oslo',
    country: 'Norway'
  },
  {
    id: 47,
    username: 'sophia_richardson',
    email: 'sophia.richardson@example.com',
    fullName: 'Sophia Richardson',
    age: 33,
    city: 'Stockholm',
    country: 'Sweden'
  },
  {
    id: 48,
    username: 'logan_hill',
    email: 'logan.hill@example.com',
    fullName: 'Logan Hill',
    age: 28,
    city: 'Athens',
    country: 'Greece'
  },
  {
    id: 49,
    username: 'olivia_white',
    email: 'olivia.white@example.com',
    fullName: 'Olivia White',
    age: 30,
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    id: 50,
    username: 'liam_clark',
    email: 'liam.clark@example.com',
    fullName: 'Liam Clark',
    age: 27,
    city: 'Vienna',
    country: 'Austria'
  }
];[
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
  },
  {
    id: 6,
    username: 'sarah_carter',
    email: 'sarah.carter@example.com',
    fullName: 'Sarah Carter',
    age: 27,
    city: 'Berlin',
    country: 'Germany'
  },
  {
    id: 7,
    username: 'adam_smith',
    email: 'adam.smith@example.com',
    fullName: 'Adam Smith',
    age: 33,
    city: 'Paris',
    country: 'France'
  },
  {
    id: 8,
    username: 'olivia_harris',
    email: 'olivia.harris@example.com',
    fullName: 'Olivia Harris',
    age: 29,
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    id: 9,
    username: 'charlie_taylor',
    email: 'charlie.taylor@example.com',
    fullName: 'Charlie Taylor',
    age: 31,
    city: 'Rome',
    country: 'Italy'
  },
  {
    id: 10,
    username: 'ava_martin',
    email: 'ava.martin@example.com',
    fullName: 'Ava Martin',
    age: 26,
    city: 'Moscow',
    country: 'Russia'
  },
  {
    id: 11,
    username: 'ethan_clark',
    email: 'ethan.clark@example.com',
    fullName: 'Ethan Clark',
    age: 34,
    city: 'Madrid',
    country: 'Spain'
  },
  {
    id: 12,
    username: 'lily_rodriguez',
    email: 'lily.rodriguez@example.com',
    fullName: 'Lily Rodriguez',
    age: 28,
    city: 'Oslo',
    country: 'Norway'
  },
  {
    id: 13,
    username: 'william_wilson',
    email: 'william.wilson@example.com',
    fullName: 'William Wilson',
    age: 30,
    city: 'Stockholm',
    country: 'Sweden'
  },
  {
    id: 14,
    username: 'mia_garcia',
    email: 'mia.garcia@example.com',
    fullName: 'Mia Garcia',
    age: 29,
    city: 'Athens',
    country: 'Greece'
  },
  {
    id: 15,
    username: 'jacob_martinez',
    email: 'jacob.martinez@example.com',
    fullName: 'Jacob Martinez',
    age: 32,
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    id: 16,
    username: 'sophia_anderson',
    email: 'sophia.anderson@example.com',
    fullName: 'Sophia Anderson',
    age: 27,
    city: 'Vienna',
    country: 'Austria'
  },
  {
    id: 17,
    username: 'logan_gonzalez',
    email: 'logan.gonzalez@example.com',
    fullName: 'Logan Gonzalez',
    age: 33,
    city: 'Copenhagen',
    country: 'Denmark'
  },
  {
    id: 18,
    username: 'harper_miller',
    email: 'harper.miller@example.com',
    fullName: 'Harper Miller',
    age: 28,
    city: 'Dublin',
    country: 'Ireland'
  },
  {
    id: 19,
    username: 'benjamin_baker',
    email: 'benjamin.baker@example.com',
    fullName: 'Benjamin Baker',
    age: 31,
    city: 'Helsinki',
    country: 'Finland'
  },
  {
    id: 20,
    username: 'ava_kelly',
    email: 'ava.kelly@example.com',
    fullName: 'Ava Kelly',
    age: 26,
    city: 'Brussels',
    country: 'Belgium'
  },
  // Additional 30 users
  {
    id: 21,
    username: 'oliver_jackson',
    email: 'oliver.jackson@example.com',
    fullName: 'Oliver Jackson',
    age: 35,
    city: 'Seoul',
    country: 'South Korea'
  },
  {
    id: 22,
    username: 'chloe_richardson',
    email: 'chloe.richardson@example.com',
    fullName: 'Chloe Richardson',
    age: 29,
    city: 'Bangkok',
    country: 'Thailand'
  },
  {
    id: 23,
    username: 'lucas_taylor',
    email: 'lucas.taylor@example.com',
    fullName: 'Lucas Taylor',
    age: 33,
    city: 'Berlin',
    country: 'Germany'
  },
  {
    id: 24,
    username: 'ava_thompson',
    email: 'ava.thompson@example.com',
    fullName: 'Ava Thompson',
    age: 26,
    city: 'Paris',
    country: 'France'
  },
  {
    id: 25,
    username: 'mia_robinson',
    email: 'mia.robinson@example.com',
    fullName: 'Mia Robinson',
    age: 30,
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    id: 26,
    username: 'william_hill',
    email: 'william.hill@example.com',
    fullName: 'William Hill',
    age: 28,
    city: 'Rome',
    country: 'Italy'
  },
  {
    id: 27,
    username: 'emily_lewis',
    email: 'emily.lewis@example.com',
    fullName: 'Emily Lewis',
    age: 32,
    city: 'Moscow',
    country: 'Russia'
  },
  {
    id: 28,
    username: 'james_young',
    email: 'james.young@example.com',
    fullName: 'James Young',
    age: 27,
    city: 'Madrid',
    country: 'Spain'
  },
  {
    id: 29,
    username: 'emma_hall',
    email: 'emma.hall@example.com',
    fullName: 'Emma Hall',
    age: 31,
    city: 'Oslo',
    country: 'Norway'
  },
  {
    id: 30,
    username: 'noah_allen',
    email: 'noah.allen@example.com',
    fullName: 'Noah Allen',
    age: 28,
    city: 'Stockholm',
    country: 'Sweden'
  },
  {
    id: 31,
    username: 'ava_nelson',
    email: 'ava.nelson@example.com',
    fullName: 'Ava Nelson',
    age: 34,
    city: 'Athens',
    country: 'Greece'
  },
  {
    id: 32,
    username: 'olivia_carter',
    email: 'olivia.carter@example.com',
    fullName: 'Olivia Carter',
    age: 29,
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    id: 33,
    username: 'liam_harris',
    email: 'liam.harris@example.com',
    fullName: 'Liam Harris',
    age: 33,
    city: 'Vienna',
    country: 'Austria'
  },
  {
    id: 34,
    username: 'ava_king',
    email: 'ava.king@example.com',
    fullName: 'Ava King',
    age: 28,
    city: 'Copenhagen',
    country: 'Denmark'
  },
  {
    id: 35,
    username: 'emma_ross',
    email: 'emma.ross@example.com',
    fullName: 'Emma Ross',
    age: 31,
    city: 'Dublin',
    country: 'Ireland'
  },
  {
    id: 36,
    username: 'ethan_knight',
    email: 'ethan.knight@example.com',
    fullName: 'Ethan Knight',
    age: 26,
    city: 'Helsinki',
    country: 'Finland'
  },
  {
    id: 37,
    username: 'mia_cooper',
    email: 'mia.cooper@example.com',
    fullName: 'Mia Cooper',
    age: 30,
    city: 'Brussels',
    country: 'Belgium'
  },
  {
    id: 38,
    username: 'lucas_kelly',
    email: 'lucas.kelly@example.com',
    fullName: 'Lucas Kelly',
    age: 27,
    city: 'Seoul',
    country: 'South Korea'
  },
  {
    id: 39,
    username: 'amelia_perez',
    email: 'amelia.perez@example.com',
    fullName: 'Amelia Perez',
    age: 33,
    city: 'Bangkok',
    country: 'Thailand'
  },
  {
    id: 40,
    username: 'mason_gomez',
    email: 'mason.gomez@example.com',
    fullName: 'Mason Gomez',
    age: 28,
    city: 'Berlin',
    country: 'Germany'
  },
  {
    id: 41,
    username: 'harper_edwards',
    email: 'harper.edwards@example.com',
    fullName: 'Harper Edwards',
    age: 32,
    city: 'Paris',
    country: 'France'
  },
  {
    id: 42,
    username: 'charlotte_bell',
    email: 'charlotte.bell@example.com',
    fullName: 'Charlotte Bell',
    age: 27,
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    id: 43,
    username: 'liam_adams',
    email: 'liam.adams@example.com',
    fullName: 'Liam Adams',
    age: 31,
    city: 'Rome',
    country: 'Italy'
  },
  {
    id: 44,
    username: 'ava_garcia',
    email: 'ava.garcia@example.com',
    fullName: 'Ava Garcia',
    age: 29,
    city: 'Moscow',
    country: 'Russia'
  },
  {
    id: 45,
    username: 'emma_thomas',
    email: 'emma.thomas@example.com',
    fullName: 'Emma Thomas',
    age: 34,
    city: 'Madrid',
    country: 'Spain'
  },
  {
    id: 46,
    username: 'william_scott',
    email: 'william.scott@example.com',
    fullName: 'William Scott',
    age: 28,
    city: 'Oslo',
    country: 'Norway'
  },
  {
    id: 47,
    username: 'sophia_richardson',
    email: 'sophia.richardson@example.com',
    fullName: 'Sophia Richardson',
    age: 33,
    city: 'Stockholm',
    country: 'Sweden'
  },
  {
    id: 48,
    username: 'logan_hill',
    email: 'logan.hill@example.com',
    fullName: 'Logan Hill',
    age: 28,
    city: 'Athens',
    country: 'Greece'
  },
  {
    id: 49,
    username: 'olivia_white',
    email: 'olivia.white@example.com',
    fullName: 'Olivia White',
    age: 30,
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    id: 50,
    username: 'liam_clark',
    email: 'liam.clark@example.com',
    fullName: 'Liam Clark',
    age: 27,
    city: 'Vienna',
    country: 'Austria'
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
