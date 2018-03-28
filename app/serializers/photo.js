import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    switch (attr) {
      case 'imageableId':
        return 'imageable_id';
      case 'imageableType':
        return 'imageable_type';
      default:
        return this._super(...arguments);
    }
  }
});
