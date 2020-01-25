import {Injectable} from '@angular/core';
import {Author} from './course';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends EntityCollectionServiceBase<Author> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Author', serviceElementsFactory);
  }

  getFilteredAuthors(searchText: string): Observable<Author[]> {
    console.log(`Search courses by text: ${searchText}`);
    return this.getWithQuery({
      textFragment: searchText,
    });
  }
}
