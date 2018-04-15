import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    delete(id){
      this.store.findRecord('author', id).then(function(post) {
        post.destroyRecord(); // => DELETE to /posts/2
      });
    },
  },
});
