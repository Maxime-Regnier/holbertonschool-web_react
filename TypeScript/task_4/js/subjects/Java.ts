import * as SubjectNS from './Subject';

export namespace Subjects {
  export interface Teacher extends SubjectNS.Subjects.Teacher {
    experienceTeachingJava?: number;
  }

  export class Subject extends SubjectNS.Subjects.Subject {
    teacher!: Teacher;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava !== undefined && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
