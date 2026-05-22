import * as SubjectNS from './Subject';

export namespace Subjects {
  export interface Teacher extends SubjectNS.Subjects.Teacher {
    experienceTeachingReact?: number;
  }

  export class Subject extends SubjectNS.Subjects.Subject {
    teacher!: Teacher;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
