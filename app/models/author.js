import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dateOfBirth: DS.attr('string'),
  dateOfDeath: DS.attr('string'),

  books: DS.hasMany('book', { async: true }),
  photos: DS.hasMany('photo'),
});
