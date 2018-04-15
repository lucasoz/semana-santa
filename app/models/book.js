import DS from 'ember-data';

export default DS.Model.extend({
  datePublished: DS.attr('date'),
  title: DS.attr('string'),

  author: DS.belongsTo('author'),
  photo: DS.belongsTo('photo'),
  chapters: DS.hasMany('chapter', { async: true }),
  //firstChapter: DS.belongsTo('chapter'),
  storeBook: DS.belongsTo('store'),
  serie: DS.belongsTo('series'),
});
