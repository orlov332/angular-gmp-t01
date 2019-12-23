export class Course {

  constructor(
    public id?: number,
    public name?: string,
    public date: Date = new Date(),
    public length?: number,
    public description?: string,
    public isTopRated = false,
  ) {
  }

}
