import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  uri: DS.attr('string'),
  imageableId: DS.attr('number'),
  imageableType: DS.attr('string'),

  imageableSeries: DS.belongsTo('serie'),
  imageableAuthors: DS.belongsTo('author'),
  imageableBooks: DS.belongsTo('book'),
});
