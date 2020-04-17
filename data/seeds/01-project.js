exports.seed = function (knex) {
  return knex("project").insert([
    {
      project_name: "large dogs",
      description: "dfadfdf",
      completed: true,
    },
    {
      project_name: "small dogs",
      description: "yada yada",
      completed: false,
    },
  ]);
};