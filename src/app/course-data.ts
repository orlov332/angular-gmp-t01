import {Course} from './course';

export class CourseData implements Course {


  constructor(id: bigint, title: string, description: string, duration: number, creationDate: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.creationDate = creationDate;
  }

  id: bigint;
  title: string;
  description: string;
  duration: number;
  creationDate: Date;

}
