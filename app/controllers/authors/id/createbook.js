import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create(){
      this.set('mensaje', '');
      if (!this.title && !this.datePublished) {
        this.set('mensaje', 'Please, enter data');
      } else if (this.title && !this.datePublished) {
        this.set('mensaje', 'Please enter date of publish');
      } else {
        var author = this.model;
        var datePublished = this.datePublished;
        var title = this.title;

        var book = this.store.createRecord('book', {
          datePublished: datePublished,
          title: title,
          author: author
        });
        
        author.get('books').addObject(book);
        book.save().then(function(){
          return author.save();
        });
        this.transitionToRoute('authors.id',this.get('model').id);
      }
    },
  },
});
