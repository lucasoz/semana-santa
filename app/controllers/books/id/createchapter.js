import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create(){
      this.set('mensaje', '');
      if (!this.title && !this.ordering) {
        this.set('mensaje', 'Please, enter data');
      } else if (this.title && !this.ordering) {
        this.set('mensaje', 'Please enter order number chapter');
      } else {
        var book = this.model;
        var ordering = this.ordering;
        var title = this.title;

        var chapter = this.store.createRecord('chapter', {
          ordering: ordering,
          title: title,
          book: book
        });

        book.get('chapters').addObject(chapter);
        chapter.save().then(function(){
          return book.save();
        });
        this.transitionToRoute('books.id',this.get('model').id);
      }
    },
  },
});
