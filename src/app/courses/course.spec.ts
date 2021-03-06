import {Course} from './course';

describe('Course', () => {
  const id = 111;
  const title = 'Course Title';
  const date = new Date();
  const duration = 110;
  const description = 'Course Description';
  let course: Course;

  beforeEach(() => {
    course = new Course(id, title, date, duration, description);
  });

  it('should create an instance', () => {
    expect(course).toBeTruthy();
    expect(course.id).toBe(id);
    expect(course.name).toBe(title);
    expect(course.date).toBe(date);
    expect(course.length).toBe(duration);
    expect(course.description).toBe(description);
  });
});
