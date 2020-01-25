export interface Author {
  id: number;
  name: string;
  lastName: string;
}

export class Course {

  constructor(
    public id?: number,
    public name?: string,
    public date: Date = new Date(),
    public length?: number,
    public description?: string,
    public isTopRated = false,
    public authors?: Author[],
  ) {
  }

}
