import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    switch (attr) {
      case 'photoId':
        return 'photo_id';
      default:
        return this._super(...arguments);
    }
  }
});
