import {Course} from './course';
import {Injectable} from '@angular/core';
import {environment as env} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CourseService {

  private readonly coursesUrl = `${env.apiBase}/courses`;

  constructor(private http: HttpClient) {
  }

  getList(textFragment: string, start: number, count: number): Observable<Course[]> {

    const options = {
      params:
        {
          textFragment,
          count: count.toString(),
          start: start.toString()
        }
    };
    return this.http.get<Course[]>(this.coursesUrl, options);
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course);
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.coursesUrl}/${id}`);
  }

  update(course: Course): Observable<Course> {
    return this.http.patch<Course>(this.coursesUrl, course);
  }

  remove(course: Course): Observable<Course> {
    return this.http.delete<Course>(`${this.coursesUrl}/${course.id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.update(course);
    } else {
      return this.create(course);
    }
  }
}
