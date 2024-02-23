import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('./database.csv')
      .then((data) => {
        res.send(`This is the list of our students
                Number of students: ${Object.keys(data).length}
                Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}
                Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
      })
      .catch((error) => {
        res.status(500);
        // res.send('Cannot load the database');
        res.end(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500);
      res.end('Major parameter must be CS or SWE');
    }
    readDatabase('./database.csv')
      .then((data) => {
        res.send(`List: ${data[major].join(', ')}`);
      })
      .catch((error) => {
        res.status(500);
        // res.send('Cannot load the database');
        res.end(error.message);
      });
  }
}
