import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take } from 'rxjs';

import { Student } from '../students/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students;
  studentList: Student[] = [];
  constructor(private db: AngularFirestore) {
    this.students = this.db.collection('students').valueChanges();
    this.students.subscribe((s:any) => this.studentList = s);
  }

  createStudent(student: Student): void {
    this.db.collection('students').doc(student.key.toString()).set({
      key: student.key,
      name: student.name,
      age: student.age
    })
  }

  updateStudent(s : Student) {
    this.db.collection('students').doc(s.key.toString()).update(
      {
        name: s.name,
        age:s.age
      }
    )
  }

  deleteStudent(key: number) {
    this.db.collection('students').doc(key.toString()).delete();
  }

  getStudentsList()  {
    return this.students;
  }

   deleteAll() {
    for(let i=0; i<this.studentList.length; i++){
      this.deleteStudent(this.studentList[i].key);
    }
   }
}
