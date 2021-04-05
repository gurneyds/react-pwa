const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/ping', function (req, res) {
  return res.send('pong');
});

const people = [
  {
    first: 'David',
    last: 'Gurney',
    id: 1,
    imageName: 'davidGurney.jpeg',
    role: 'Web Developer'
  },
  {
    first: 'Jacob',
    last: 'Reed',
    id: 2,
    imageName: 'jacobReed.jpeg',
    role: 'Web Developer'
  },
  {
    first: 'Bob',
    last: 'Hathaway',
    id: 3,
    imageName: 'bobHathaway.jpeg',
    role: 'QA Engineer'
  },
  {
    first: 'Ehab',
    last: 'Abunuwara',
    id: 4,
    imageName: 'ehabAbunuwara.jpeg',
    role: "Project Management"
  },
  {
    first: 'Jacob',
    last: 'Kenning',
    id: 5,
    imageName: 'jacobKenning.jpeg',
    role: 'Designer'
  },
  {
    first: 'Jed',
    last: 'Roberts',
    id: 6,
    imageName: 'jedRoberts.jpeg',
    role: 'Software Engineer'
  },
  {
    first: 'Jerry',
    last: 'Chadwick',
    id: 7,
    imageName: 'jerryChadwick.jpeg',
    role: 'Engineering Manager'
  },
  {
    first: 'Jonathan',
    last: 'Gustavson',
    id: 8,
    imageName: 'jonathanGustavson.jpeg',
    role: 'Product owner'
  },
  {
    first: 'Michael Nelson',
    last: 'Gray',
    id: 9,
    imageName: 'michaelNelsonGray.jpeg',
    role: 'Product owner'
  }
]

const images = [
  {
    id: 1,
    imageName: 'tree.jpeg'
  }
]

app.get('/people', function(req, res) {
  res.send(people)
})

app.post('/people', function(req, res) {
  const incoming = req.body
  console.log('people posted with:', incoming)
  res.sendStatus(200);
})

app.get('/people/details/:id', function (req, res) {
  const person = people.find(p => String(p.id) === req.params.id)
  if (person) {
    res.send(person)
  } else {
    res.statusCode(404)
    res.send('Cant find that person, sorry!')
  }
})

app.get('/people/image/:id', (req, res, next) => {
  const person = people.find(p => String(p.id) === req.params.id)

  if (person) {
    var imagePath = path.join(__dirname, 'images', person.imageName);

    res.download(imagePath, function (err) {
      if (!err) return; // file sent
      if (err.status !== 404) return next(err); // non-404 error
      // file for download not found
      res.statusCode = 404;
      res.send('Cant find that image, sorry!');
    });
  } else {
    res.statusCode = 404;
    res.send('Cant find that image, sorry!');
  }
})

app.get('/image/:id', (req, res, next) => {
  const image = images.find(p => String(p.id) === req.params.id)

  if (image) {
    var imagePath = path.join(__dirname, 'images', image.imageName);

    res.download(imagePath, function (err) {
      if (!err) return; // file sent
      if (err.status !== 404) return next(err); // non-404 error
      // file for download not found
      res.statusCode = 404;
      res.send('Cant find that image, sorry!');
    });
  } else {
    res.statusCode = 404;
    res.send('Cant find that image, sorry!');
  }
})

app.listen(process.env.PORT || 8080);