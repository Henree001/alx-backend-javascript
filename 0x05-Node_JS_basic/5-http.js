const http = require('node:http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${Object.keys(data).length}\n`);
        res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
        res.end();
      })
      .catch((error) => {
        res.write('This is the list of our students\n');
        res.end(error.message);
      });
  }
});
app.listen(port, hostname, () => {
});

module.exports = app;
