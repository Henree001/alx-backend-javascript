const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.CS.length + data.SWE.length}\n`);
      res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
      res.end();
    })
    .catch((error) => {
      res.status(500);
      res.write('This is the list of our students\n');
      res.end(error.message);
    });
});

app.listen(1245);
module.exports = app;
