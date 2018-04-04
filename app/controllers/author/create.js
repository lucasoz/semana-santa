import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save(){
      var newPost = this.store.createRecord('author', {
        name: this.name,
      });
      console.log(newPost);
      newPost.save();
    },
  },
});
