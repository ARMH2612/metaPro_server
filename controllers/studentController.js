
let students = [
  {
    id: 1,
    name: "Houssame Rahiche",
    dateOfBirth: new Date("1996-12-26"),
    address: "Bourouba Alger",
    bloodType: "O+",
    email: "houssame.rahiche@email.com",
    phone: "07876543734",
    groups: [{name: "Math", status: "expired"}, {name: "Science", status: "paid"}]
  },
  {
    id: 2,
    name: "Aymene Bouayede",
    dateOfBirth: new Date("1998-10-20"),
    address: "Blida somewhere somewhere",
    bloodType: "A-",
    email: "aymene.bouayede@email.com",
    phone: "087654373",
    groups: [{name: "History", status: "paid"}, {name: "English", status: "waiting"}]
  },
];

const getStudents = (req, res) => {
  return res.status(200).json(students);
};

const createStudent = (req, res) => {
  const { 
    name,
    dateOfBirth,
    address,
    bloodType,
    email,
    phone,
    groups
   } = req.body;
  const id = students.length + 1;
  const newStudent = { 
    id,
    name,
    dateOfBirth,
    address,
    bloodType,
    email,
    phone,
    groups
  };
  students.push(newStudent);
  return res.status(201).json(newStudent);
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }
  students = students.filter((student) => student.id !== id);
  return res.status(204).json({ message: 'Student deleted successfully' });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { 
    name,
    dateOfBirth,
    address,
    bloodType,
    email,
    phone,
   } = req.body;

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const updatedStudent = { 
    ...students[studentIndex],
    id,
    name,
    dateOfBirth,
    address,
    bloodType,
    email,
    phone,
  };

  students[studentIndex] = updatedStudent;

  return res.status(200).json(updatedStudent);
};

const addStudentGroup = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, status } = req.body

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const updatedStudent = { 
    ...students[studentIndex],
    groups: [...students[studentIndex].groups, {name, status}],
  };

  students[studentIndex] = updatedStudent;

  return res.status(200).json(updatedStudent);
};

module.exports = {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
  addStudentGroup
};
