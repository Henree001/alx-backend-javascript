import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
        res.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
        res.end();
      })
      .catch((error) => {
        res.status(500);
        res.end(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500);
      res.end('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => {
        res.send(`List: ${data[major].join(', ')}`);
      })
      .catch((error) => {
        res.status(500);
        res.end(error.message);
      });
  }
}
