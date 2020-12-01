const projects = [
    {projects: 'Joke API', done: true},
    {projects: 'Build Server', done: false},
    {projects: 'Web Blog', done: false},
    {projects: 'Portfolio', done: false}
];

module.exports = {
    getAll: function() {
      return projects;
    }
  };