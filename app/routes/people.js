import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      people: [
        {
          id: 'cristian',
          name: 'Cristian',
          gender: 'M',
          salary: 15,
        },
        {
          id: 'melissa',
          name: 'Melissa',
          gender: 'F',
          salary: 15,
        },
        {
          id: 'juan',
          name: 'Juan',
          gender: 'M',
          salary: 15,
        },
        {
          id: 'roruva',
          name: 'Robin',
          gender: 'M',
          salary: 20,
        },
        {
          id: 'vero',
          name: 'Verónica',
          gender: 'F',
          salary: 17,
        },
        {
          id: 'isa',
          name: 'Isabel',
          gender: 'F',
          salary: 9,
        },
      ],
    };
  },
  // setupController(controller, model){
  //   this._super(...arguments);
  //   const people = model.people;
  //   const totalSalary = people.reduce(
  //     (sumSalary, person) => sumSalary + person.salary,0
  //   );
  //   controller.set('totalSalary', totalSalary);
  // }

});
