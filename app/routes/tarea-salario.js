import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var people = [
      {
        name: 'Lucas',
        isFemale: false,
        salary: '12',
      },
      {
        name: 'Andrés',
        isFemale: false,
        salary: '14',
      },
      {
        name: 'Julieta',
        isFemale: true,
        salary: '13',
      },
      {
        name: 'Andrea',
        isFemale: true,
        salary: '16',
      },
      {
        name: 'Camilo',
        isFemale: false,
        salary: '20',
      },
      {
        name: 'Valentina',
        isFemale: true,
        salary: '19',
      },
    ];

    var total = 0;
    people.forEach(function (person) {
      total = total + parseInt(person.salary);
    });
    return {
      people,
      total,
    };
  }
});
