import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('people', function() {
    this.route('person', { path: ':id' });
  });
  this.route('tarea-salario');
  this.route('parcial');
  this.route('authors', function() {
    this.route('id', { path: ':id'});
    this.route('create');
  });


  this.route('books', function() {
    this.route('id', { path: ':id'}, function() {
      this.route('edit');
    });
  });
  this.route('chapters');

  this.route('author', function() {
    this.route('create');
  });
});

export default Router;
