import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  photoId: DS.attr('string'),

  photos: DS.belongsTo('photo'),
  books: DS.hasMany('book',{ async: true }),
});
