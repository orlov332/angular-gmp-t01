import {EntityMetadataMap, EntityPluralNames} from '@ngrx/data';

export const coursesEntityMetadata: EntityMetadataMap = {
  Course: {},
};

export const coursesPluralNames: EntityPluralNames = {
  // Case matters. Match the case of the entity name.
  Course: 'Courses'
};

