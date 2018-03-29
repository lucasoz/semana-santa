import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    edit(){

      var title = this.get('title');
      console.log(title);
	    this.set('title', "");


    },
  },
});
