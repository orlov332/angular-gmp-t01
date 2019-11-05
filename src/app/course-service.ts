import {Course} from './course';
import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {

  public getCourses(): Course[] {

    return [
      new Course(
        111,
        'Video Course 1. Name Tag',
        new Date(2019, 11, 5, 12, 12, 12),
        120,
        'After the training attendees will be able to:\n' +
        '        Write their own Angular application from scratch;\n' +
        '        Write custom Angular components, form controls, pipes...\n' +
        '        Use webpack/ng cli to build Angular application;\n' +
        '        Use RxJS;\n' +
        '        Test Angular applications via karma & jasmine.'
      ),
      new Course(
        111,
        'Video Course 2. Name Tag',
        new Date(2019, 11, 4, 12, 12, 12),
        120,
        'After the training attendees will be able to:\n' +
        '        Write their own Angular application from scratch;\n' +
        '        Write custom Angular components, form controls, pipes...\n' +
        '        Use webpack/ng cli to build Angular application;\n' +
        '        Use RxJS;\n' +
        '        Test Angular applications via karma & jasmine.'
      ),
      new Course(
        111,
        'Video Course 3. Name Tag',
        new Date(2019, 11, 3, 12, 12, 12),
        120,
        'After the training attendees will be able to:\n' +
        '        Write their own Angular application from scratch;\n' +
        '        Write custom Angular components, form controls, pipes...\n' +
        '        Use webpack/ng cli to build Angular application;\n' +
        '        Use RxJS;\n' +
        '        Test Angular applications via karma & jasmine.'
      ),
      new Course(
        111,
        'Video Course 4. Name Tag',
        new Date(2019, 11, 2, 12, 12, 12),
        120,
        'After the training attendees will be able to:\n' +
        '        Write their own Angular application from scratch;\n' +
        '        Write custom Angular components, form controls, pipes...\n' +
        '        Use webpack/ng cli to build Angular application;\n' +
        '        Use RxJS;\n' +
        '        Test Angular applications via karma & jasmine.'
      ),
    ];
  }
}
