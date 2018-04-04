import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    edit(){
      var title = this.get('model.title');
      var datePublished = this.get('model.datePublished');
      var id = this.get('model').id;
      console.log(this.get('model').id);
      this.store.createRecord('book', {
        title: this.title,
        datePublished: this.datePublished,
      });
    },
  },
});
