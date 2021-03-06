import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  dateOfDeath: DS.attr('date'),

  books: DS.hasMany('book'),
  photos: DS.hasMany('photo'),
});
