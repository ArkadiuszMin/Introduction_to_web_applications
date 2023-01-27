import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { StudentService } from '../services/student.service';
import { Student } from '../students/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  student: Student = new Student(-1,"",0);
  submitted = false;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {
    this.route.params.subscribe(params => {
      this.studentService.getStudentsList().pipe(take(1)).subscribe((st:any) =>{
        this.student = st.filter((el: { key: any; }) => el.key == params["key"])[0]
      });
    })
   }

  save() {
    this.studentService.getStudentsList().pipe(take(1)).subscribe((s:any) => 
    {
      //console.log(s);
      this.studentService.updateStudent(this.student);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
