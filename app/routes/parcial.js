import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      todos: [
        {
          name: 'realizar x cosa',
          state: false,
        },
        {
          name: 'realizar y cosa',
          state: false,
        },
        {
          name: 'realizar z cosa',
          state: false,
        },
      ],
    };
  },
});
