export class Course {

  constructor(
    public id?: number,
    public title?: string,
    public creationDate: Date = new Date(),
    public duration?: number,
    public description?: string,
    public topRated = false,
  ) {
  }

}
