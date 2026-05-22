import * as TeacherNS from './Teacher';

export namespace Subjects {
  export interface Teacher extends TeacherNS.Subjects.Teacher {}

  export class Subject {
    teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
