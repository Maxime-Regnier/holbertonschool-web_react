import * as SubjectNS from './Subject';

export namespace Subjects {
  export interface Teacher extends SubjectNS.Subjects.Teacher {
    experienceTeachingC?: number;
  }

  export class Subject extends SubjectNS.Subjects.Subject {
    teacher!: Teacher;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC !== undefined && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
