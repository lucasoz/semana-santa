import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    switch (attr) {
      case 'dateOfBirth':
        return 'date_of_birth';
      case 'dateOfDeath':
        return 'date_of_death';
      default:
        return this._super(...arguments);
    }
  }
});
