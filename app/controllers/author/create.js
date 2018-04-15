import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save(){
      this.set('mensaje', '');
      if (!this.name && !this.dateOfBirth) {
        this.set('mensaje', 'Please, enter data');
      } else if (this.name && !this.dateOfBirth) {
        this.set('mensaje', 'Please enter date of birth');
      } else {
        var date_b = new Date(this.dateOfBirth);
        var date_d = new Date(this.dateOfDeath);
        var newPost;
        if (!this.dateOfDeath) {
          newPost = this.store.createRecord('author', {
            name: this.name,
            dateOfBirth: date_b,
          });
          newPost.save();
          this.transitionToRoute('authors');
        } else{
          newPost = this.store.createRecord('author', {
            name: this.name,
            dateOfBirth: date_b,
            dateOfDeath: date_d,
          });
          newPost.save();
          this.transitionToRoute('authors');
        }

      }

    },

  },
});
