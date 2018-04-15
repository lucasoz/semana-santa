import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    update(){
      var name = this.get('model.name');
      // var dateOfBirth = Date(this.get('model.dateOfBirth'));
      // var dateOfDeath = Date(this.get('model.dateOfDeath'));
      var id = this.get('model').id;
      this.store.findRecord('author', id).then(function(tyrion) {
          tyrion.set('name', name);
          // tyrion.set('dateOfBirth', dateOfBirth);
          // tyrion.set('dateOfDeath', dateOfDeath);
          tyrion.save();
      });

      this.transitionToRoute('authors');

    },
  },
});
