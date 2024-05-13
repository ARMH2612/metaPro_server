const { Request, Response } = require('express');
const { Student } = require('../models/Student');


 let students: Student[] = [
  {
    id: 1,
    name: "Houssame Rahiche",
    dateOfBirth: new Date("1996-12-26"),
    address: "Bourouba Alger",
    bloodType: "O+",
    email: "houssame.rahiche@email.com",
    phone: "07876543734",
    groups: [{name : "Math", status: "expired" }, {name : "Science", status: "paid"}]
  },
  {
    id: 2,
    name: "Aymene Bouayede",
    dateOfBirth: new Date("1998-10-20"),
    address: "Blida somewhere somewhere",
    bloodType: "A-",
    email: "aymene.bouayede@email.com",
    phone: "087654373",
    groups: [{name : "History", status: "paid" }, {name : "English", status: "waiting"}]
  },
];



export const getStudents = (req: Request, res: Response) => {
  return res.status(200).json(students);
};

export const createStudent = (req: Request, res: Response) => {
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
  const newStudent: Student = { 
    id,
    name,
    dateOfBirth,
    address,
    bloodType,
    email,
    phone,
    groups };
  students.push(newStudent);
  return res.status(201).json(newStudent);
};

export const deleteStudent = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }
  students = students.filter((student) => student.id !== id);
  return res.status(204).json({message: 'Student deleted successfully'});
};


export const updateStudent = (req: Request, res: Response) => {
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

  const updatedStudent: Student = { 
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


export const addStudentGroup = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, status } = req.body

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const updatedStudent: Student = { 
    ...students[studentIndex],
    groups : [...students[studentIndex].groups, {name, status}],
  };

  students[studentIndex] = updatedStudent;

  return res.status(200).json(updatedStudent);

}