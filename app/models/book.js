import DS from 'ember-data';

export default DS.Model.extend({
  datePublished: DS.attr('string'),
  title: DS.attr('string'),

  author: DS.belongsTo('author'),
  // photo: DS.belongsTo('photo'),
  // chapters: DS.hasMany('chapter', { async: true, inverse: null }),
  // //firstChapter: DS.belongsTo('chapter'),
  // storeBook: DS.belongsTo('store'),
  // serie: DS.belongsTo('series'),
});
